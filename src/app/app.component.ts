import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'website';
  
  ngOnInit(){
    $(".icon_yotang").click(
      function(){
        alert(" I Love U Nouvelle!!!!!!!!!! "); 
      }
    ); 

    $(".option_about").mouseenter(
      function() {
        $("#op1").css('display', 'block');
      }).mouseleave(
        function() {
          $("#op1").css('display', 'none');
        }
      );
  

      $(".option_yotang").mouseenter(
        function() {
          $("#op2").css('display', 'block');
        }).mouseleave(
          function() {
            $("#op2").css('display', 'none');
          }
        );
  
          
  $(".dropdownmain").click(
      function() {
        $("#dropdownitems").css('display', 'block');
      });
  
      $(".dropdown").mouseleave(
        function() {
          $("#dropdownitems").css('display', 'none');
        });

  }

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `yotang_logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/logo/yotang.svg")
      
    );
  }
}
