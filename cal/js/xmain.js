	'use strict'

	var Main = {
		numA: 0,
		numB: 0,
		hasSign: false,
		signNumber: "",
		summer: '',

		content: document.getElementById('content'),
		result: document.getElementById('result'),


		inClick: function(number) {

			var last_str = this.summer.charAt(this.summer.length - 1);

			switch (number) {
				case '0':
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
				case 'backspace':
					if (this.summer.length > 1) {
						this.summer = this.summer.substring(this.summer.length - 1);
					} else {
						this.summer = '0';
					}
					break;

			}
			this.content.value = this.summer;

		},

		/**
		 * [cal description]
		 * @param  {[String]} summer [显示的字符]
		 * @param  {[String]} number [字符中的加减乘除]
		 * @return {[type]}        [description]
		 */
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
			this.content.value = this.summer;
			this.result.value = this.summer;
			// 计算一次，重置一次
			this.hasSign = false;
			this.signNumber = '';
		},

		reset: function() {
			this.hasSign = false;
			this.signNumber = '';
			this.summer = '0';
			this.content.value = '0';
			this.result.value = '0';
			this.numA = 0;
			this.numB = 0;

		}
	}