import { Component } from '@angular/core';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Values } from './components/values';
import { Stats } from './components/stats';
import { Projects } from './components/projects';
import { Results } from './components/results';
import { Team } from './components/team';
import { Gallery } from './components/gallery';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Values,
    Stats,
    Projects,
    Results,
    Team,
    Gallery,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
