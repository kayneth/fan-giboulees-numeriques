var fan = new Date(); 
fan = new Date(fan.getFullYear(), 3 - 1, 11, 10);

$('#countdown').countdown({until: fan, 
    layout: '{dn} Jours, {hn} Heures,  {mn} {ml} et {sn} Secondes!'});
