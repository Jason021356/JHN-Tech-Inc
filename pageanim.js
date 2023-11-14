prdpg = document.getElementById("allprddiv");
tctg = document.getElementById("techchattag");
gtrtg = document.getElementById("gtracingtag");
tcico = document.getElementById("TCIco");
vdc = document.getElementById("videoclipapp");
ans = document.getElementById("Antivirussoftware");
aibot = document.getElementById("aibot");
NB = document.getElementById("laptop");
desktop = document.getElementById("Desktop");
sc = document.getElementById("Screen");
indev = document.getElementById("inputdevice");
apppgcnt = 0;
tds = "transition-duration: 0.2s;";
function alldivovstyle() {
    switch (apppgcnt) {
        case 1:
            prdpg.style = "height:160px;background-color: white;visibility: unset;transition-duration: 0.2s;";
            tctgtimeout = setTimeout(() => tctg.style = "position: relative;left: 100px;visibility: unset;color:black;", 200);
            tcicotimeout = setTimeout(() => tcico.style = "width: 40px;height: 40px;position: absolute;top: 15px;border-radius: 5px;left:50px;visibility:unset;opacity: 1.0;", 300);
            gtrtgtimeout = setTimeout(() => gtrtg.style = "visibility:unset;left:100px;color:black;", 300);
            vdctimeout = setTimeout(() => vdc.style = "visibility:unset;left:100px;top:80px;color:black;", 400);
            aibottimeout = setTimeout(() => aibot.style = "position: absolute;left: 380px;color: black;visibility: unset;", 500);
            anstimeout = setTimeout(() => ans.style = "position: absolute;left: 380px;color: black;visibility: unset;", 600);
            break;
        case 2:
            prdpg.style = "height:300px;background-color: white;visibility: unset;transition-duration: 0.2s;";
            NBtimeout = setTimeout(() => NB.style = "left: 6%;visibility: unset;color:black;", 200);
            desktoptimeout = setTimeout(() => desktop.style = "left:6%;visibility:unset;color:black", 300);
            sctimeout = setTimeout(() => sc.style = "left:6%;visibility:unset;color:black", 400);
            indevtimeout = setTimeout(() => indev.style = "left:6%;visibility:unset;color:black", 500);
            break;
    }
}
function alldivlvstyle() {
    switch (apppgcnt) {
        case 1:
            clearTimeout(tctgtimeout);
            clearTimeout(tcicotimeout);
            clearTimeout(gtrtgtimeout);
            clearTimeout(vdctimeout);
            clearTimeout(aibottimeout);
            clearTimeout(anstimeout);
            gtrtg.style = tds;
            tctg.style = tds;
            tcico.style = tds;
            vdc.style = tds;
            ans.style = tds;
            aibot.style = tds;
            break;
        case 2:
            clearTimeout(NBtimeout);
            clearTimeout(desktoptimeout);
            clearTimeout(sctimeout);
            clearTimeout(indevtimeout);
            NB.style = tds;
            desktop.style = tds;
            sc.style = tds;
            indev.style = tds;
            break;
    }
    prdpg.style = "transition-duration: 0.8s;";
}
function apppgovfn() {
    apppgcnt = 1;
    alldivovstyle();
}
function apppglvfn() {
    alldivlvstyle();
}
function jfgpgovfn() {
    apppgcnt = 2;
    alldivovstyle();
}
function jfgpgotfn() {
    alldivlvstyle();
}