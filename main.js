// Input Title and Click Enter will put value from input into H1 tag for Header
document.querySelector("#titleInput").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('title').innerHTML = document.querySelector("#titleInput").value;
    }
});
//
// Title in Header
//
// Input Blue Band Copy and Click Enter will put value from input into H1 tag for the Blue Band Copy
document.querySelector("#blueBandInput").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector("#blueBandCopy").innerHTML = document.querySelector("#blueBandInput").value;
    }
});
//
// Link Header 1
//
// Input Links Header and Click Enter will put value from input into H2 tag for the Title of the Links Section
document.querySelector('#linkInput1').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('#linkHeader1').innerHTML = document.querySelector('#linkInput1').value;
    }
});
//
// Link Header 2
//
// Input Links Header and Click Enter will put value from input into H2 tag for the Title of the Links Section
document.querySelector('#linkInput2').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('#linkHeader2').innerHTML = document.querySelector('#linkInput2').value;
    }
});
//
// Link Header 3
//
// Input Links Header and Click Enter will put value from input into H2 tag for the Title of the Links Section
document.querySelector('#linkInput3').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('#linkHeader3').innerHTML = document.querySelector('#linkInput3').value;
    }
});
//
//
//
// Sub Header 1
//
// Input Links Sub Header and Click Enter will put value from input into H2 tag for the Sub Header of the Links Section
document.querySelector('#subHeaderInput1').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('#subHeader1').innerHTML = document.querySelector('#subHeaderInput1').value;
    }
});
//
// Sub Header 2
//
// Input Links Sub Header and Click Enter will put value from input into H2 tag for the Sub Header of the Links Section
document.querySelector('#subHeaderInput2').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('#subHeader2').innerHTML = document.querySelector('#subHeaderInput2').value;
    }
});
//
// Sub Header 3
//
// Input Links Sub Header and Click Enter will put value from input into H2 tag for the Sub Header of the Links Section
document.querySelector('#subHeaderInput3').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('#subHeader3').innerHTML = document.querySelector('#subHeaderInput3').value;
    }
});
//
//
// Input Paragrah into Text Area and click Submit will put value into P tag and add another Text Area from more content
// 
function placeText(e) {
    e.parentNode.innerHTML = e.parentNode.querySelector('textarea').value;
    document.querySelector('#contentLives').innerHTML += "<p style='margin: 20px 0 0;padding: 0;font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;line-height: 1.2;color: #666;font-weight: 300;font-size: 16px;' > <textarea style='width:100%;height:200px!important;margin-bottom:20px;' id='bodyTextInput' placeholder='Enter the body text here'></textarea> <button onclick='placeText(this)'>Submit</button> <button onclick='deleteThis(this)'>Done</button> </p>";
}
//
//
// Deletes current Text Area, use when finished entering content
//
function deleteThis(e) {
    e.parentNode.remove();
}
//
//
// Deletes whole link section
//
function deleteAll(e) {
    e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
}
//
//
// Add the link
//
function addThis(e) {
    var icons = document.getElementsByName('icon');
    var iconImg ;
    var linkAddress = e.parentNode.parentNode.querySelector('#linkAddress');
    var linkTitle = e.parentNode.parentNode.querySelector('#linkTitle');
    var linkSubTitle = e.parentNode.parentNode.querySelector('#linkSubTitle');

    for(var i=0;i<icons.length;i++) {
        if (icons[i].checked) {
            iconImg = icons[i].value;
        }
    }

    e.parentNode.parentNode.innerHTML += '<div style="margin: 30px 0;padding: 0 15px 0 0;height:100%"><a href="' + linkAddress.value + '"style=\"clear:both;margin:0;padding:0;display:block;text-decoration:none;font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif;line-height: 1.2;color: #ff6633;font-weight: 300;font-size: 16px;"><img src="https://www.surepeople.com/resources/images/emails/' + iconImg + '" style="margin:0;padding:0;border:0;display:inline-block;width:30px;vertical-align:top;" alt="surepeople"/><span style="margin:0 0 0 10px;padding:0;border:0;display:inline-block;width:80%;">' + linkTitle.value + '<span style="margin:5px 0 0;padding:0;border:0;display:block;clear:both;color:#666!important;">' + linkSubTitle.value + '</span></span></a></div>'
}

