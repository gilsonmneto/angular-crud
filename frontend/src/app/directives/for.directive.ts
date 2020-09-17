import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[] // a palavra Em está no footer <li *myFor="let n Em [1, 2, 3"] usando 'teste'"></li>
  @Input('myForUsando') texto: string // a palavra Usando está no footer <li *myFor="let n em [1, 2, 3"] usando 'teste'"></li>


  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) {}

  ngOnInit(): void{
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, {$implicit: number});
    }
    //console.log(this.numbers)
    //console.log(this.texto)
  }
    
}
