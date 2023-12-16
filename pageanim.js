body = document.querySelector("body");
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
clpprdpg = document.getElementById("cellphoneNavBar");
clpprdtag = document.querySelectorAll(".cellphonetag");
td1 = document.getElementById("td1");
td2 = document.getElementById("td2");
td3 = document.getElementById("td3");
cone = document.querySelector(".cone");
ctwo = document.querySelector(".ctwo");
cthree = document.querySelector(".cthree");
cfour = document.querySelector(".cfour");
shadow = document.getElementById("shadow");
apppgcnt = 0;
mobilebl = false;
prdpgbl = false;
body.addEventListener('keydown', function (e) {
    if (e.key === "/") {
        document.getElementById("Search").focus();
        e.preventDefault();
    }
});
function clearTimeoutfn(...cto) { cto.forEach(function (number) { clearTimeout(number) }) }
function defaultfn(...tag) { tag.forEach(function (n2) { n2.style = "" }) }
function PCalldivovstyle() {
    if (prdpgbl == false) {
        switch (apppgcnt) {
            case 1:
                prdpg.style = "height:160px;visibility: unset;transition-duration: 0.2s;";
                tctgtimeout = setTimeout(() => tctg.style = "position: relative;left: 100px;visibility: unset;color:white;", 200);
                tcicotimeout = setTimeout(() => tcico.style = "width: 40px;height: 40px;position: absolute;top: 15px;border-radius: 5px;left:50px;visibility:unset;opacity: 1.0;", 300);
                gtrtgtimeout = setTimeout(() => gtrtg.style = "visibility:unset;left:100px;color:white;", 300);
                vdctimeout = setTimeout(() => vdc.style = "visibility:unset;left:100px;top:80px;color:white;", 400);
                aibottimeout = setTimeout(() => aibot.style = "position: absolute;left: 380px;color:white;visibility: unset;", 500);
                anstimeout = setTimeout(() => ans.style = "position: absolute;left: 380px;color:white;visibility: unset;", 600);
                shadow.style = "visibility:unset;background-color:rgba(73,73,73,0.7)";
                break;
            case 2:
                prdpg.style = "height:300px;visibility: unset;transition-duration: 0.2s;";
                NBtimeout = setTimeout(() => NB.style = "left: 6%;visibility: unset;color:white;", 200);
                desktoptimeout = setTimeout(() => desktop.style = "left:6%;visibility:unset;color:white;", 300);
                sctimeout = setTimeout(() => sc.style = "left:6%;visibility:unset;color:white;", 400);
                indevtimeout = setTimeout(() => indev.style = "left:6%;visibility:unset;color:white;", 500);
                shadow.style = "visibility:unset;background-color:rgba(73,73,73,0.7)";
                break;
        }
    }
}
function PCalldivlvstyle() {
    if (prdpgbl == false) {
        switch (apppgcnt) {
            case 1:
                clearTimeoutfn(tctgtimeout, tcicotimeout, gtrtgtimeout, vdctimeout, aibottimeout, anstimeout);
                defaultfn(gtrtg, tctg, tcico, vdc, ans, aibot);
                break;
            case 2:
                clearTimeoutfn(NBtimeout, desktoptimeout, sctimeout, indevtimeout);
                defaultfn(NB, desktop, sc, indev);
                break;
        }
    }
    shadow.style = "transition-duration: 0.8s;";
    prdpg.style = "transition-duration: 0.8s;";
}
function Devicealldivanimstyle() {
    if (mobilebl == false) {
        if (mobilebl == true) { clearTimeout(clpprdpgto) };
        clpprdpg.style = "visibility:unset;width:100%;background-color: rgb(37, 37, 37);"
        td1.style = "transform: rotate(45deg);";
        td2.style = "visibility:hidden;background-color:rgba(0,0,0,0.0);top:5px;";
        td3.style = "transform: rotate(-45deg);top:-6px;";
        coneto = setTimeout(() => cone.style = "color:white;visibility:unset;left:20%;", 200);
        ctwoto = setTimeout(() => ctwo.style = "color:white;visibility:unset;left:20%;", 250);
        cthreeto = setTimeout(() => cthree.style = "color:white;visibility:unset;left:20%;", 300);
        cfourto = setTimeout(() => cfour.style = "color:white;visibility:unset;left:20%;", 350);
        mobilebl = true;
    } else {
        clearTimeoutfn(coneto, ctwoto, cthreeto, cfourto);
        clpprdpgto = setTimeout(() => clpprdpg.style = "", 200);
        defaultfn(td1, cone, ctwo, cthree, cfour);
        td2.style = "top: 5px;";
        td3.style = "top:10px";
        mobblto = setTimeout(() => mobilebl = false, 200);
    }
}