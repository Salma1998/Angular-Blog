export interface Category {
  name: string;
  id: number;
}

export interface Author {
  full_name: string;
  id: number;
  email: string;
  image: string;
}

export default interface Article {
  name: string;
  imgURL: string;
  id: number;
  title: string;
  content: string;
  author: Author;
  category: Category;
  read_times: number;
  updatedAt: Date;
}

export class DB {
  public static articlesList: Array<Article> = [
    {
      name: "article1",
      imgURL: "./../../../assets/images/puffin.jpg",
      id: 12,
      title: "Title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ex asperiores magni similique numquam sit repellat nobis minima laborum, corporis labore nesciunt error earum, ad cupiditate dolore quibusdam unde quisquam.",
      author: {
        full_name: "fullName",
        id: 2,
        email: "email@gmail.com",
        image: "",
      },
      category: {
        name: "cat1",
        id: 2,
      },
      read_times: 4,
      updatedAt: new Date(),
    },
    {
      name: "article2",
      imgURL: "./../../../assets/images/puffin.jpg",
      id: 1,
      title: "Title",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ex asperiores magni similique numquam sit repellat nobis minima laborum, corporis labore nesciunt error earum, ad cupiditate dolore quibusdam unde quisquam.",
      author: {
        full_name: "fullName",
        id: 2,
        email: "email@gmail.com",
        image: "",
      },
      category: {
        name: "cat1",
        id: 2,
      },
      read_times: 4,
      updatedAt: new Date(),
    },
  ];
  public static authorsList: Array<Author> = [
    {
      full_name: "author1",
      image: "./../../../assets/images/puffin.jpg",
      id: 1,
      email: "email1@gmail.com",
    },
    {
      full_name: "author2",
      image: "./../../../assets/images/puffin.jpg",
      id: 2,
      email: "email@gmail.com",
    },
  ];
  public static user_info = null;
}
