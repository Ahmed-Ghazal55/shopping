import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import * as $ from "jquery";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Hide .body element if window width is less than 768px
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        let head = $('.list-items .head');
        head.next().hide();
        head.on('click', function() {
          $(this).next().toggle('slow');
        });
      } else {
        $('.list-items .head').next().show();
      }
    });

    // Toggle .body element when .head element is clicked
    // $('.list-items .head').on('click', function() {
    //   if ($('.list-items .body').is(':visible')) {
    //     $(this).next().hide('fast');
    //   } else {
    //     $(this).next().show('slow');
    //   }
    // });
  }
}