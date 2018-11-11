var express = require('express');
var router = express.Router();

var fetch = require('node-fetch');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function(req, res, next) {
         
    
console.log(req.body);
    ems = req.body.ems;
    su.len = ems.length;
    res.end('');
    await Init();
    for (var i in ems) {
        var key = ems[i];
        eml = key;
        await time(1000);
        try {
            var ch = await ckeckH(key);
        } catch (e) {
            throw e;
        }
        console.log(key + ' => '+ ch);
        if (ch == 'error')
            {
                await(2000);
                try {
                    await Init();
                } catch (e) {
                    throw e;
                }
                i = i - 1;
                continue;
            }
        if (ch == true) {su.ems.push(eml);
            su.t++;  
        }
        else if (ch == false) {  su.f++; }
        else su.u++;
    }
    ems = [];
    
});

router.get('/chk', function(req, res) {
        res.end(JSON.stringify({su:su,len:ems.length, eml:eml}));
        //console.log(su);
        });








module.exports = router;
