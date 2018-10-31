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
 //planning to add this to thumbnail attributes 
 //so it can dictates its width and height and other styles
//  width:number;
//  height:number;
//  class:string;
//  
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
//users
export class Registration{
  id:number; 
  username:string;
  password:string;
  user:UserInformation;
}
export class UserInformation{
  id:number;
  firstname:string;
  middlename:string;
  lastname:string;
  address:string;
  gender:string;
  language:Language;
}
export class Language{
  id:number;
  name:string;
  description:string;
}
export class Item{
  id:number;
  name:string;
  quantity:number;
  description:string;
  images:Thumbnail[];
  imageCover:string;
}

export class OrderNumber{
  id:number;
}


