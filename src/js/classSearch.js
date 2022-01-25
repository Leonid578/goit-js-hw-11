export class SendImg {
  constructor() {
    this.send = '';
    this.numberPages = 1;
    this.pages = 40;
  }
  async fetchImg(send, numberPages) {
    const meta = new URLSearchParams({
      key: '25398180-e4c47011137e03578f1d37584',
      q: this.send,
      orientation: 'horizontal',
      safesearch: true,
      image_type: 'photo',
      page: this.numberPages,
      per_page: this.pages,
    });
    
    const url = `https://pixabay.com/api/?${meta}`;
    const res = await fetch(url);
    return res.json();
  }

  get metodSend() {
    return this.send;
  }

  set metodSend(newSend) {
    if (newSend === '') {
      console.error('Ошибка! Строка не может быть пустой!');
      return;
    }
    this.send = newSend;
  }

  nextPages() {
    this.numberPages += 1;
  }
  startPages() {
    this.numberPages = 1;
  }
}
