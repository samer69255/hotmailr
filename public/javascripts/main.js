(function () {
    var socket = io();
    var ems = document.getElementById('emails');
    var s = document.getElementById('eStat');
    var su = document.getElementById('success');
    socket.on('run', function(ob) {
        document.getElementById('main1').className = 'hide'
        document.getElementById('main2').className = '';
        s.innerHTML = ob.stat;
        if (ob.Ems)
        su.value = ob.Ems;
    });
    socket.on('add', function(eml) {
        su.value += eml;
    });
    socket.on('status', function(cmd) {
        s.innerHTML = cmd;
    });
    socket.on('copm', function(su) {
        s.innerHTML = 'complte';
                   alert('تم ادخال : ' + su.len + '\nعدد المتاح : ' + su.t + '\nعدد الغير متاح : ' + su.f + '\nالحالة غير معروفة : ' + su.u);
    });
    ems.addEventListener('paste', function(e) {
    e.preventDefault();
     var  clipboardData = e.clipboardData || window.clipboardData;
    var text = clipboardData.getData('Text');
        
    var emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (emails == null || emails.length == 0) return;
    var emails2 = [];
    for (var i in emails) {
        var key = emails[i];
                if ( (/@(hotmail|outlook|yahoo)/).test(key) )  emails2.push(key);
    }
    this.value = emails2.join('\n').trim();
    });
    
    document.getElementById('ckeck').addEventListener('click', function () {
        var value = ems.value;
        if (value.length < 7) return;
        var emails5 = value.split(/\n+/);
        console.log(emails5.length);
        socket.emit('start', emails5);
        
        
    });
    
    document.getElementById('rest').addEventListener('click', function ()  {
        socket.emit('rest');
    });
    
    
})();
