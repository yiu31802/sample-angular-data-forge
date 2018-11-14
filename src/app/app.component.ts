import { DataFrame } from 'data-forge-beta'

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  public ngOnInit(): void {
    let df = new DataFrame({
        columns: {
            'regiment': ['Nighthawks', 'Nighthawks', 'Nighthawks', 'Nighthawks', 'Dragoons', 'Dragoons', 'Dragoons', 'Dragoons', 'Scouts', 'Scouts', 'Scouts', 'Scouts'],
            'company': ['1st', '1st', '2nd', '2nd', '1st', '1st', '2nd', '2nd','1st', '1st', '2nd', '2nd'],
            'TestScore': [4, 24, 31, 2, 3, 4, 24, 31, 2, 3, 2, 3]
        }
    });
    const pivotted = df.pivot(["regiment", "company"], "TestScore", testScores => testScores.average());
    console.log(pivotted.toArray())
  }

}
