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

    var dropdownstatus="False";

    $(".icon_yotang").click(
      function(){
        alert(" I Love U Nouvelle!!!!!!!!!! "); 
      }
    ); 

    $(".option_about").mouseenter(
      function() {
        $(".op1").css('display', 'inline-block');
      }).mouseleave(
        function() {
          $(".op1").css('display', 'none');
        });
        
    $(".op1").mouseenter(
      function() {
        $(".op1").css('display', 'inline-block');
      }).mouseleave(
        function() {
          $(".op1").css('display', 'none');
        }
    );
    $(".option_yotang").mouseenter(
      function() {
        $(".op2").css('display', 'inline-block');
      }).mouseleave(
        function() {
          $(".op2").css('display', 'none');
        });
        
    $(".op2").mouseenter(
      function() {
        $(".op2").css('display', 'inline-block');
      }).mouseleave(
        function() {
          $(".op2").css('display', 'none');
        }
    );

  
          
    $(".dropdownmain").click(
      
      function() {
        $(".dropdownmain").css('display', 'none');
        $("#dropdownmain1").css('display', 'block');
        $("#dropdownmain2").css('display', 'none');
        $("#dropdownitems").css('display', 'block');
      }
      );
    
    $("#dropdownmain1").click(
    
      function() {
        $(".dropdownmain").css('display', 'block');
        $("#dropdownmain1").css('display', 'none');
        $("#dropdownmain2").css('display', 'none');
        $("#dropdownitems").css('display', 'none');
        dropdownstatus="True";
      }
      );
  
    

    $("#dropdownmain2").click(
  
      function() {
        $("#dropdownmain1").css('display', 'block');
        $("#dropdownmain2").css('display', 'none');
        $(".up_class").css('display','block');
        $(".up1_class").css('display','none'); 
        $(".up2_class").css('display','none'); 
        $(".up_class_hr").css('display','block');
        $(".up1_class_hr").css('display','none'); 
        $(".up2_class_hr").css('display','none'); 
        $("#op2_3_mobile_dd_main").css('display','none'); 
        $(".op2_3_mobile_dd").css('display','none'); 
        dropdownstatus="True";
      }
      );

    $(".dropdown").mouseleave(
      function() {
        $(".dropdownmain").css('display', 'block');
        $("#dropdownmain1").css('display', 'none');
        $("#dropdownmain2").css('display', 'none');
        $("#dropdownitems").css('display', 'none');
        $(".up_class").css('display','block');
        $(".up1_class").css('display','none'); 
        $(".up2_class").css('display','none'); 
        $(".up_class_hr").css('display','block');
        $(".up1_class_hr").css('display','none'); 
        $(".up2_class_hr").css('display','none'); 
        $("#op2_3_mobile_dd_main").css('display','none'); 
        $(".op2_3_mobile_dd").css('display','none'); 
      });

    $("#op1_mobile").click(
      function() {
        $(".up_class").css('display','none');
        $(".up1_class").css('display','block'); 
        $(".up_class_hr").css('display','none');
        $(".up1_class_hr").css('display','block'); 
        $("#dropdownmain1").css('display', 'none');
        $("#dropdownmain2").css('display', 'block');
      });

      $("#op2_mobile").click(
        function() {
          $(".up_class").css('display','none');
          $(".up2_class").css('display','block'); 
          $(".up_class_hr").css('display','none');
          $("#op2_3_mobile_dd_main").css('display','none');
          $(".up2_class_hr").css('display','block'); 
          $("#dropdownmain1").css('display', 'none');
          $("#dropdownmain2").css('display', 'block');
          $(".op2_3_mobile_dd_hr").css('display','block');
        });

      $("#op2_3_mobile").click(
        function() {
          $("#op2_3_mobile").css('display','none');
          $("#op2_3_mobile_dd_main").css('display','block'); 
          $(".op2_3_mobile_dd_hr").css('display','block');
          $(".op2_3_mobile_dd").css('display','block'); 

        });
    $("#op2_3_mobile_dd_main").click(
      function() {
        $("#op2_3_mobile").css('display','block');
        $("#op2_3_mobile_dd_main").css('display','none'); 
        $(".op2_3_mobile_dd").css('display','none'); 

      });

  }

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `yotang_logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/logo/yotang.svg")
      
    );
  }
}
