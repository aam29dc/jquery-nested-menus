"use strict";

$(document).ready(function(){
    let $menus = $('div.container div.menu').not('div.menu0');
    
    // MENU 0 LINKS
    $('div.container div.menu0 ul li').each(function(i){
        $(this).on('click', function(){
            $menus.hide();
            $menus.filter('div.menu1').eq(i).toggle('slide:right');
        });
    });

    // MENU 1 BACK BUTTONS
    $('div.container div.menu1 ul li.back').each(function(){
        $(this).on('click', function(){
            $menus.hide();
            $menus.filter('div.menu0').toggle('slide:right');
        });
    });

    // MENU 1 LINKS
    $('div.container div.menu1 ul li').not('.back').each(function(i){
        $(this).on('click', function(){
            $menus.hide();
            $menus.filter('div.menu2').eq(i).toggle('slide:right');
        });
    });

    // MENU 2 BACK BUTTONS
    $('div.container div.menu2 ul li.back').each(function(i){
        $(this).on('click', function(){
            $menus.hide();
            $menus.filter('div.menu1').eq(i).toggle('slide:right');
        });
    });
});