import { Injectable } from '@angular/core';

import { Experience } from '../../models/experience'
import { Phase } from '../../timeline/phase'
import { ITimeline, Timeline } from '../../timeline/timeline'

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  experiences: Experience[] = [
    new Experience({
      id: 1,
      phaseIndex: 0,
      title: $localize `:@@montessori_title:title`,
      location: 'Culemborg',
      description: $localize `:@@montessori_description:description`,
      imageSrc: 'https://file.timohoff.nl/montessori 2011 white.png'
    }),
    new Experience({
      id: 2,
      phaseIndex: 1,
      title: $localize `:@@vmbo-tl_title:title`,
      location: 'Culemborg',
      description: $localize `:@@vmbo-tl_description:description`,
      imageSrc: 'https://file.timohoff.nl/lek en linge white.png'
    }),
    new Experience({
      id: 3,
      phaseIndex: 1,
      title: $localize `:@@paper_delivery_title:title`,
      location: 'Culemborg',
      description: $localize `:@@paper_delivery_description:description`,
      isBound: false,
    }),
    new Experience({
      id: 4,
      phaseIndex: 1,
      title: $localize `:@@logistics_2010_title:title`,
      location: 'Culemborg',
      description: $localize `:@@logistics_2010_description:description`,
      isBound: false,
      imageSrc: 'https://file.timohoff.nl/centraal boekhuis white.png'
    }),
    new Experience({
      id: 5,
      phaseIndex: 1,
      title: $localize `:@@logistics_2011_title:title`,
      location: 'Culemborg',
      description: $localize `:@@logistics_2011_description:description`,
      isBound: false,
      imageSrc: 'https://file.timohoff.nl/centraal boekhuis white.png'
    }),
    new Experience({
      id: 6,
      phaseIndex: 2,
      title: $localize `:@@application_development_study_title:title`,
      location: 'Den Bosch',
      description: $localize `:@@application_development_study_description:description`,
      imageSrc: 'https://file.timohoff.nl/kw1c logo 2011.jpeg',
      skills: ['HTML', 'JavaScript (JS)', 'CSS', 'PHP', 'Eclipse', 'T-SQL', 'MSSQL', 'MSSMS', 'Visual Studio', 'C#', '.NET Framework', 'Linux']
    }),
    new Experience({
      id: 7,
      phaseIndex: 2,
      title: $localize `:@@stb_internship_title:title`,
      location: 'Houten',
      description: $localize `:@@stb_internship_description:description`,
      imageSrc: 'https://file.timohoff.nl/stb logo squared.jpeg',
      skills: ['Servoy: JavaScript (JS) -> Java', 'OAuth', 'REST']
    }),
    new Experience({
      id: 8,
      phaseIndex: 2,
      title: $localize `:@@safira_internship_title:title`,
      location: 'Geldermalsen',
      description: $localize `:@@safira_internship_description:description`,
      imageSrc: 'https://file.timohoff.nl/safira 2014 white.png',
      skills: ['Eclipse', 'PHP', 'HTML', 'CSS', 'JavaScript (JS)', 'jQuery']
    }),
    new Experience({
      id: 9,
      phaseIndex: 2,
      title: $localize `:@@php_website_development_title:title`,
      location: 'Culemborg',
      description: $localize `:@@php_website_development_description:description`,
      isBound: false,
      skills: ['Git', 'Eclipse', 'PHP', 'HTML', 'CSS', 'JavaScript (JS)']
    }),
    new Experience({
      id: 10,
      phaseIndex: 2,
      title: $localize `:@@java_game_development_title:title`,
      location: 'Culemborg',
      description: $localize `:@@java_game_development_description:description`,
      isBound: false,
      skills: ['Linux Ubuntu', 'Git', 'Eclipse', 'Java']
    }),
    new Experience({
      id: 11,
      phaseIndex: 3,
      title: $localize `:@@informatics_study_title:title`,
      location: 'Den Bosch',
      description: $localize `:@@informatics_study_description:description`,
      imageSrc: 'https://file.timohoff.nl/avans.png',
      skills: ['Git', 'Eclipse', 'Java', 'Visual Studio', 'C#', '.NET Framework', 'WPF', 'MVVM', 'C++', 'Swift', 'PhoneGap', 'Regex', 'Unit-testing', 'Azure', 'Requirements']
    }),
    new Experience({
      id: 12,
      phaseIndex: 3,
      title: $localize `:@@logistics__title:title`,
      location: 'Geldermalsen',
      description: $localize `:@@logistics__description:description`,
      isBound: false,
      imageSrc: 'https://file.timohoff.nl/blokker wrap logo.png'
    }),
    new Experience({
      id: 13,
      phaseIndex: 3,
      title: $localize `:@@cordis_internship_title:title`,
      location: 'Eindhoven',
      description: $localize `:@@cordis_internship_description:description`,
      imageSrc: 'https://file.timohoff.nl/cordis suite.png',
      skills: ['Subversion (SVN)', 'Visual Studio', '.NET Framework', 'HTML', 'CSS', 'JavaScript (JS)', 'SVG', 'Regex']
    }),
    new Experience({
      id: 14,
      phaseIndex: 4,
      title: $localize `:@@junior_software_engineer_title:title`,
      location: 'Utrecht',
      description: $localize `:@@junior_software_engineer_description:description`,
      imageSrc: 'https://file.timohoff.nl/medimapp.png',
      skills: ['Git', 'Visual Studio', 'C#', '.NET Framework', 'Entity Framework (EF)', 'HTML', 'SCSS', 'JavaScript (JS)', 'AngularJs', 'Jira', 'Confluence', 'Bitbucket', 'Regex']
    }),
    new Experience({
      id: 15,
      phaseIndex: 4,
      title: $localize `:@@soulve_scaleup_title:title`,
      location: 'Utrecht',
      description: $localize `:@@soulve_scaleup_description:description`,
      imageSrc: 'https://file.timohoff.nl/medimapp.png',
      skills: ['Git', 'Visual Studio', 'C#', '.NET Framework', 'Entity Framework (EF)', 'HTML', 'SCSS', 'JavaScript', 'AngularJs', 'Azure DevOps', 'Regex']
    }),
    new Experience({
      id: 16,
      phaseIndex: 4,
      title: $localize `:@@cpp_game_engine_development_title:title`,
      location: 'Utrecht',
      description: $localize `:@@cpp_game_engine_development_description:description`,
      isBound: false,
      skills: ['Git', 'Visual Studio', 'C++']
    }),
    new Experience({
      id: 17,
      phaseIndex: 4,
      title: $localize `:@@net_migration_title:title`,
      location: 'Utrecht',
      description: $localize `:@@net_migration_description:description`,
      imageSrc: 'https://file.timohoff.nl/medimapp.png',
      skills: ['Git', 'Visual Studio', 'C#', '.NET Core', 'Entity Framework (EF) Core', 'HTML', 'SCSS', 'JavaScript', 'AngularJs', 'Azure DevOps', 'Regex']
    }),
    new Experience({
      id: 18,
      phaseIndex: 4,
      title: $localize `:@@soulve_scaledown_title:title`,
      location: 'Utrecht',
      description: $localize `:@@soulve_scaledown_description:description`,
      imageSrc: 'https://file.timohoff.nl/medimapp.png',
      skills: ['Git', 'Visual Studio', 'C#', '.NET Core', 'Entity Framework (EF) Core', 'HTML', 'SCSS', 'JavaScript', 'AngularJs', 'Azure DevOps', 'Cordova', 'XCode', 'iOS', 'Android Studio', 'Android', 'App links', 'Regex']
    }),
    new Experience({
      id: 19,
      phaseIndex: 4,
      title: $localize `:@@c-sharp_game_engines_development_title:title`,
      location: 'Utrecht',
      description: $localize `:@@c-sharp_game_engines_development_description:description`,
      isBound: false,
      skills: ['Git', 'Visual Studio', 'C#', '.NET Core', 'UML', 'PlantUML']
    }),
    new Experience({
      id: 20,
      phaseIndex: 4,
      title: $localize `:@@soulve_end_title:title`,
      location: 'Utrecht',
      description: $localize `:@@soulve_end_description:description`,
      imageSrc: 'https://file.timohoff.nl/medimapp.png'
    }),
    new Experience({
      id: 21,
      phaseIndex: 5,
      title: $localize `:@@angular_website_development_title:title`,
      location: 'Utrecht',
      description: $localize `:@@angular_website_development_description:description`,
      skills: ['Visual Studio Code', 'Angular', 'TypeScript', 'Macbook', 'Accessibility']
    }),
  ];

  constructor() { }

  public getAll() : Experience[] {
    return this.experiences;
  }

  public get(id: number) {
    let experience = this.experiences.find((experience: Experience) => experience.id == id);

    if (experience == null) {
      return null;
    }

    let phases = this.getPhases();
    experience.color = phases[experience.phaseIndex].color;

    return experience;
  }

  public getTimeline() : ITimeline {
    let timeline : ITimeline = new Timeline();
    timeline.phases = this.getPhases();

    for (let experience of this.experiences) {
      timeline.phases[experience.phaseIndex].waypoints.push(experience);
    }

    return timeline;
  }

  private getPhases() : Phase[] {
    return[
      {
        title: 'Elementary',
        color: 'orange',
        waypoints: []
      },
      {
        title: 'Secondary',
        color: 'red',
        waypoints: []
      },
      {
        title: 'MBO',
        color: 'lime',
        waypoints: []
      },
      {
        title: 'HBO',
        color: 'aqua',
        waypoints: []
      },
      {
        title: 'MediMapp',
        color: 'c31e5f',
        waypoints: []
      },
      {
        title: 'Career transition',
        color: 'grey',
        waypoints: []
      }
    ];
  }
}