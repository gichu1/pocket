$(function(){
    $('#fullpage').fullpage({
    anchors:['slideContainer','content1','content2','content3','content4','content5',],
    lockAnchors: true,
    navigation: true,
    showActiveTooltip: true,
    slidesNavigation: true,
    slideSelector: '.slide',
    sectionSelector: '.section',
    });
});