
import {Games, Tabs, NavigationItem, Consoles} from './../../objects/class.object';
//ps vita game data
export const psv:Games[]=
[{id:1, title:'1001 Spikes', link:[{link:'http://adf.ly/1dmnLf', comments:'US'}], image:[{src:'http://cdn2.vox-cdn.com/assets/3559641/1001-spikes-screenshot_1280.png'}, {src:'http://static.gamespot.com/uploads/screen_small/536/5360430/2539179-trailer_1001spikes_newchallengers_20140522.jpg'}], 
imageCover:"http://www.psmania.net/images/covers/2707_cover.jpg", description:'Hi'},
 {id:2, title:'2013 Infected Wars', link:[{link:'http://adf.ly/1dj5Bo', comments:'US'}, {link:'http://adf.ly/1dmVt4', comments:'EUR'}], image:[{src:'https://i.ytimg.com/vi/KSBYdvui6WQ/maxresdefault.jpg'}, {src:'http://www.vitaplayer.co.uk/wp-content/uploads/2015/05/2013-Infected-Wars-PS-Vita.jpg'}], imageCover:"http://www.psmania.net/images/covers/4292_cover.jpg", description:'Hi'},
 {id:3, title:'A.W. Phoenix Festa', link:[{link:'http://adf.ly/1dfgGu', comments:'EUR'}, {link:'http://adf.ly/1diSsz', comments:'JPN'}], image:[{src:'http://www.playincstore.com/wp-content/uploads/2016/07/awpfpsv.jpg'},{src:'http://cdn4.dualshockers.com/wp-content/uploads/2016/07/C¦ºQVSC¦ºQBattle.jpg'}], imageCover:"http://www.playincstore.com/wp-content/uploads/2016/07/awpfpsv.jpg", description:'Hi'}];
//3ds games data
export const t3dsGames:Games[]=
[{id:1, title:'Pokemon X', link:[], image:[{src:'http://www.hacksbook.com/wp-content/uploads/2013/10/Pokemon-X-and-Y-1024x611.jpg'}], imageCover:"https://i5.walmartimages.com/asr/8b43764f-39d7-4718-8000-e0829199c9c3_1.86405dc1300958e32f68c7b712f9dd5c.jpeg", description:'Hi'}];
//psp games data
export const psp:Games[]=
[{id:1, title:'Final Fantasy Tactics', link:[], image:[{src:'http://vignette1.wikia.nocookie.net/finalfantasy/images/6/67/Dark_knight_fft.jpg/revision/latest?cb=20130808001059'}, {src:'http://199.101.98.242/media/images/157288-Final_Fantasy_Tactics_-_The_War_of_the_Lions_(Europe)-3.jpg'}], imageCover:"http://vignette1.wikia.nocookie.net/finalfantasy/images/2/21/Fftlwnacover.jpg/revision/latest/top-crop/width/320/height/320?cb=20071230153304", description:'Hi'}];
//platforms data
export const platform:Consoles[]=
[{id:1, title:'PSP', games:psp, options:1}, {id:2, title:'PS VITA', games:psv, options:2}, {id:3, title:'3DS', games:t3dsGames, options:3}];
//tabs data - no use in a meantime trying to find its use
export const tabsTutorial:Tabs[]=
[{id:1, title:'PSP', link:'psp', options:1},
 {id:2, title:'PS VITA', link:'psp', options:2},
 {id:3, title:'3DS', link:'3ds', options:3}];

 export const tabsPSPTutorial=
 [{id:1, title:'VHBL', link:'psp', options:1}, 
  {id:2, title:'CFW', link:'psp', options:2}];

export const tabsPSVTutorial=
 [{id:1, title:'Henkaku', link:'psp', options:1}, 
  {id:2, title:'Taihenkaku', link:'psp', options:2}];
  
//navigation item data
export const navItems:NavigationItem[]=
[{id:1, label:'Home', link:'/home'},
 {id:2, label:'About', link:'/aboutus'},
 {id:2, label:'Tutorials', link:'/tutorials'}];
