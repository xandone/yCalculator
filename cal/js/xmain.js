	'use strict'

	var Main = {
		temp: 0,
		numA: 0,
		numB: 0,
		summer: '',

		result: document.getElementById('sum'),

		inClick: function(number) {

			switch (number) {
				case '1':
				case '2':
				case '3':
				case '4':
				case '5':
				case '6':
				case '7':
				case '8':
				case '9':
					this.summer += number;
					break;
				case '+':
				case '-':
				case 'x':
				case '/':
					if (this.summer.indexOf('+') != -1 ||
						this.summer.indexOf('-') != -1 ||
						this.summer.indexOf('x') != -1 ||
						this.summer.indexOf('/') != -1) {
						this.cal(number);
						break;

					}
					this.summer += number;

					break;
				case '.':
					break;
				case '=':
					break;

			}

			this.result.value = this.summer;

		},

		cal: function(number) {
			var last_str = this.summer.charAt(this.summer.length - 1);
			if (last_str === '+' || last_str === '-' || last_str === 'x' || last_str === '/') {
				return;
			}
			this.summer = '0';
			this.result.value = this.summer;
		}

	}