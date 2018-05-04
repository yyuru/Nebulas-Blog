import { Directive, ElementRef ,OnInit} from '@angular/core';//Directive使用@Directive装饰器，ElementRef访问DOM元素
import * as anime  from 'animejs';
@Directive({
    selector:'[loading]'
})

export class LoadingDirective {
    
}
