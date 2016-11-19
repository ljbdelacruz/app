//objects for the web to use
export class Games{
  id:number;
  title:string;
  link:Link[];
  image:Thumbnail[];
  imageCover:string;
  description:string;
}
export class Link{
  link:string;
  comments:string;
}
export class Thumbnail{
  src:string;
}
export class NavigationItem{
  id:number;
  label:string;
  link:string;
}
export class Tabs{
  id:number;
  title:string;
  link:string;
  options:number;
}
export class Consoles{
  id:number;
  title:string;
  games:Games[];
  options:number;
}


