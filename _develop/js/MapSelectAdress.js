class MapSelectAdress {
	constructor(
		footerAdressStand,
		footerAdressChange,
		footerPhoneChange,
		footerEmailChange,) {
		this.footerAdressStand = footerAdressStand;
		this.footerAdressChange = footerAdressChange;
		this.footerPhoneChange = footerPhoneChange;
		this.footerEmailChange = footerEmailChange;
		this.initLayout();
		this.initSelectAdress();
	}

	initLayout() {
		this.mapSelectDistrict = document.querySelectorAll('.footer__top_map_svg');

		this.mapSelectSamara = document.getElementById('footerMapSamara');
		this.mapSelectPenza = document.getElementById('footerMapPenza');
		this.mapSelectKazan = document.getElementById('footerMapKazan');
		this.mapSelectSaransk = document.getElementById('footerMapSaransk');
	}

	initSelectAdress() {
		this.footerAdress = document.querySelector('.footer__top_adress');

		for (let i = 0; i < this.mapSelectDistrict.length; i++) {
			this.mapSelectDistrict[i].addEventListener('mouseover', () => {
				if (this.mapSelectDistrict[i] == this.mapSelectPenza || this.mapSelectDistrict[i] == this.mapSelectSaransk) {
					this.footerAdress.innerHTML = `
						<li><i class="fas fa-phone"></i>&nbsp;&nbsp;<a href="tel:+79623988000">8&nbsp;(962)&nbsp;398-8000</a></li>
						<li><i class="fas fa-phone"></i>&nbsp;&nbsp;<a href="tel:88412235239">8&nbsp;(8412)&nbsp;235-239</a></li>
						<li><i class="fas fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:fasad-kp@mail.ru">fasad-kp@mail.ru</a></li>
						<li><i class="fas fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:kraspenza@yandex.ru">kraspenza@yandex.ru</a></li>
						<li>Республика&nbsp;Мордовия<br>Пензенская область,&nbsp;г.&nbsp;Пенза<br>ООО&nbsp;"ТК&nbsp;Френк-Пенза"<br>ул.&nbsp;Котранского,&nbsp;49</li>
					`;
				} else if (this.mapSelectDistrict[i] == this.mapSelectKazan) {
					this.footerAdress.innerHTML = `
						<li><i class="fas fa-phone"></i>&nbsp;&nbsp;<a href="tel:89871750001">8&nbsp;(987)&nbsp;175-00-01</a></li>
						<li><i class="fas fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:aigul.archihub@gmail.com">aigul.archihub@gmail.com</a></li>
						<li>Республика&nbsp;Татарстан<br>г.&nbsp;Казань<br>ООО&nbsp;"АРХИХАБ"<br>ул.&nbsp;Николая&nbsp;Столбова<br>дом&nbsp;1/3,&nbsp;офис&nbsp;1014</li>
					`;
				} else if (this.mapSelectDistrict[i] != this.mapSelectPenza ||
					this.mapSelectDistrict[i] != this.mapSelectKazan ||
					this.mapSelectDistrict[i] != this.mapSelectSaransk) {
					this.footerAdress.innerHTML = `
						<li><i class="fas fa-phone"></i>&nbsp;&nbsp;<a href="tel:88001018895">8&nbsp;(800)&nbsp;101-88-95</a></li>
						<li><i class="fas fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:fasad-pov@mail.ru">fasad-pov@mail.ru</a></li>
						<li>г.&nbsp;Самара, ул.&nbsp;Парижской Коммуны, д.&nbsp;3-А, оф.&nbsp;49</li>
					`;
				}
			});

			this.mapSelectDistrict[i].addEventListener('mouseleave', () => {
				if (this.mapSelectDistrict[i] != this.mapSelectPenza ||
					this.mapSelectDistrict[i] != this.mapSelectKazan ||
					this.mapSelectDistrict[i] != this.mapSelectSaransk) {
					this.footerAdress.innerHTML = `
						<li><i class="fas fa-phone"></i>&nbsp;&nbsp;<a href="tel:88001018895">8&nbsp;(800)&nbsp;101-88-95</a></li>
						<li><i class="fas fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:fasad-pov@mail.ru">fasad-pov@mail.ru</a></li>
						<li>г.&nbsp;Самара, ул.&nbsp;Парижской Коммуны, д.&nbsp;3-А, оф.&nbsp;49</li>
					`;
				} else if (this.mapSelectDistrict[i] == this.mapSelectPenza ||
					this.mapSelectDistrict[i] != this.mapSelectKazan) {
					this.footerAdress.innerHTML = `
						<li><i class="fas fa-phone"></i>&nbsp;&nbsp;<a href="tel:88001018895">8&nbsp;(800)&nbsp;101-88-95</a></li>
						<li><i class="fas fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:fasad-pov@mail.ru">fasad-pov@mail.ru</a></li>
						<li>г.&nbsp;Самара, ул.&nbsp;Парижской Коммуны, д.&nbsp;3-А, оф.&nbsp;49</li>
					`;
				}
			});
		}
	}
}