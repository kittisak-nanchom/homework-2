import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Skill } from '../dataall/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: Skill[];
  constructor(private backendService: BackendService) {
    this.skill = [];
   }

  ngOnInit(): void {
    this.skill = this.backendService.getSkill();
  }

}
