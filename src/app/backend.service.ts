import { Injectable } from '@angular/core';
import { About } from './dataall/about';
import { Portfolio } from './dataall/portfolio';
import { Skill } from './dataall/skill';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getAbout():About[] {
    return [
    {
      img:"https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.6435-9/47679673_1348996221908991_4722512053158281216_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFGp1M9r0B2WSEkEsm6eS-752r3zw7dt67navfPDt23rsrQ6qvoXKYtF7Q_VBd6keUmXnSYc8ofNlTuc7L6gE1l&_nc_ohc=UkXkL5nXmEgAX9_7e13&_nc_ht=scontent.fcnx1-1.fna&oh=082c89dbdbc87eb75934c6805dad29bc&oe=60BBA41C",
      data:"Hello. My name is Kittisak Nanchom. I am 22 years old."
    },
    {
      img:"",
      data:"I live in a small town in Nan Province."
    },
    {
      img:"",
      data:"I am 178 cm tall and weigh 53 kg."
    },
    {
      img:"",
      data:" I have black brown hair and black eyes."
    },
    {
      img:"",
      data:" My mother said I have a sweet smile that melts your heart."
    },
    {
      img:"",
      data:" I have a lot of friends."
    },
    {
      img:"",
      data:" My best friend is Nat."
    },
    {
      img:"",
      data:" My hometown is Uttaradit."
    },
    {
      img:"",
      data:" I intend to come to study in Nan Because Nan city has beautiful nature,"
    },
    {
      img:"",
      data:" the weather is very good But sometimes,"
    },
    {
      img:"",
      data:" I miss my home, my mom, my dad, and my sisters,"
    },
    {
      img:"",
      data:" and it makes me realize that being alone gives us strength and determination for the future."
    },
  ];
  }

  getSkill():Skill[]{
    return[{
      data:"Microsoft Word (Intermediate - Have experience in printing various documents)"
    },
    {
      data:"Microsoft Excel (Intermediate – Experienced in using pivot table and mathematical functions to analyze a set of data)"
    },
    {
      data:"-Social: Team player, Adaptability, Take feedback, Conflict resolution"
    },
    {
      data:"-Communications: Effective listening, Business writing, Public speaking, Presentation, Negotiation, Persuasion"
    },
    {
      data:"-Management: Leadership, Time management, Project management, Problem-solving, Result-orientedbr"
    },

    ];
  }
  getPortfolio():Portfolio[]{
    return[{
      img:"https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/183211038_743546412997531_6024497405850360725_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGLTKaTASWp2bYXvEzcRoqaqo1MjDPAf1uqjUyMM8B_W1Gh3naA_QAUIHStayADAvqf8nH1kButcAMJtf5jkuwt&_nc_ohc=54q4EWzvYIAAX9Oaniq&_nc_ht=scontent.fcnx1-1.fna&oh=b6272611633b1f27cfe757953bdb3e6f&oe=60BAFBB5"
    },
    {
      img:"https://scontent.fcnx1-1.fna.fbcdn.net/v/t1.15752-9/182795653_2778300979151204_1230155299266580172_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGcGEZiHQ0RSf1WV2xsK0XlCY48JM3zYHMJjjwkzfNgc3loCmwBdET41zuGiBanP6SBDe-h-XEcu4mMmYhE7qV6&_nc_ohc=c0_WLB0cjrIAX8TiBB-&_nc_ht=scontent.fcnx1-1.fna&oh=2c0bf0ab61c425e79b8e41d761d69c3b&oe=60B95D1C"
    }];
  }
}
