	'use strict'

	var Main = {
		temp: 0,
		numA: 0,
		numB: 0,
		hasSign: false,
		signNumber: "",
		summer: '',

		result: document.getElementById('sum'),

		inClick: function(number) {

			var last_str = this.summer.charAt(this.summer.length - 1);

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

					if (last_str === '+' || last_str === '-' || last_str === 'x' || last_str === '/') {
						alert('输入有误');
						break;
					}

					// 已包含符号,并且不为尾号
					if (this.hasSign) {
						this.cal(this.summer, this.signNumber);
						break;
					}

					this.summer += number;
					this.signNumber = number;
					this.hasSign = true;

					break;
				case '.':
					break;
				case '=':
					if (last_str === '+' || last_str === '-' || last_str === 'x' || last_str === '/') {
						alert('输入有误');
						break;
					}
					this.cal(this.summer, this.signNumber);
					break;

			}

			this.result.value = this.summer;

		},

		cal: function(summer, number) {
			this.numA = parseInt(summer.substring(0, summer.indexOf(number)));
			this.numB = parseInt(summer.substring(summer.indexOf(number) + 1));

			this.hasSign = false;

			switch (number) {
				case '+':
					summer = (this.numA + this.numB).toString();
					break;
				case '-':
					summer = (this.numA - this.numB).toString();
					break;
				case 'x':
					summer = (this.numA * this.numB).toString();
					break;
				case '/':
					summer = (this.numA / this.numB).toString();
					break;
			}

			this.summer = summer;
			this.result.value = this.summer;
			// 计算一次，重置一次
			this.hasSign = false;
			this.signNumber = '';
		}

	}