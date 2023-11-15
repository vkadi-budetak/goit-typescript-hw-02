/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component <T> {
  constructor(public props:T) {

  }
}

interface PageProperties {
  title: string
}

class Page extends Component <PageProperties> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};