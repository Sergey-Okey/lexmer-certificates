<template>
	<div class="modal-overlay" @click="close">
		<div class="modal" @click.stop>
			<span class="modal-close" @click="close">&times;</span>
			<div class="modal-header">
				<span>Условия использования</span>
			</div>
			<div class="modal-body">
				<p>1. Сертификат действует бессрочно.</p>
				<p>2. Номинал сертификата вы определяете сами — от 1 000 до 50 000 рублей.</p>
				<p>3. Виртуальный сертификат будет отправлен по электронной почте или в СМС. Вы можете указать дату и время
					доставки, а также добавить небольшой текст.</p>
				<p>4. Виртуальный сертификат можно привязать к личному кабинету клиента LEXMER — при оформлении или позже по
					номеру телефона.</p>
				<p>5. Физическим и виртуальным сертификатом можно оплатить покупку в розничных магазинах LEXMER или на сайте
					(способ оплаты «Картой онлайн»). Адреса магазинов, в которых принимается физический или виртуальный
					сертификат, можно увидеть по ссылке <span><a href="lexmer.ru/shops">lexmer.ru/shops.</a></span></p>
				<p>6. Подарочный сертификат можно использовать одновременно с бонусными баллами и промокодом.</p>
				<p>7. Сумму сертификата можно использовать для оплаты части или всего заказа, оплатить доставку или
					разделить на несколько покупок.</p>
				<p>8. За приобретение подарочного сертификата бонусные баллы покупателю не начисляются.</p>
				<p>9. Чтобы вернуть подарочный сертификат (физический или виртуальный), обратитесь в розничный магазин или в
					службу поддержки на сайте.</p>
				<p>10. Если вы возвращаете покупку, оплаченную сертификатом, деньги вернутся на карту или наличными.</p>
				<p>11. Приобретение или использование сертификата означает полное согласие с указанными условиями,
					размещёнными в магазинах LEXMER и на сайте <span><a href="lexmer.ru">lexmer.ru.</a></span></p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

const close = () => {
	emit('close');
};
</script>

<style scoped lang="scss">
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999;
}

.modal {
	width: 40%;
	height: 90%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
	padding: 40px;
	z-index: 1000;
	overflow-y: auto;

	@include breakpoint('mobile') {
		width: 100%;
		height: 100%;
	}

	@include breakpoint('tablet', 'wide') {
		width: 30%;
		height: 90%;
	}

	.modal-header {
		font-family: 'Bebas';
		font-size: 42px;
		font-weight: 400;
		line-height: 37.8px;
		letter-spacing: -0.01em;
		text-align: left;
		margin-bottom: 20px;
	}

	.modal-body {
		overflow-y: auto;
		font-size: 18px;
		font-weight: 400;
		line-height: 23.4px;
		letter-spacing: -0.01em;
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 10px;

		p {
			span {
				text-decoration: underline;
			}
		}
	}

	.modal-close {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
		font-size: 24px;
	}
}
</style>