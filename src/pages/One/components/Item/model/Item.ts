export default class Item {
  public name: string;

  public title: string;

  public ranking: string;

  public popularity: string;

  public dark: string;

  public light: string

  constructor(name: string, title: string, ranking: string,
    popularity: string, dark: string, light: string) {
    this.name = name;
    this.title = title;
    this.ranking = ranking;
    this.popularity = popularity;
    this.dark = dark;
    this.light = light;
  }
}
