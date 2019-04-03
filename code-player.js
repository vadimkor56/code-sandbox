<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>jQuery User Interface Plug-in</title>
        
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="jquery-ui/jquery-ui.js"></script>
        
        <link href="jquery-ui-1/jquery-ui.css" rel="stylesheet">

        <style>
            h2 {
                margin-top: 40px;
            }
            #drag-container {
                width: 700px;
                height: 500px;
                border: 1px grey solid;
                display: inline-block;
            }
            
            #resize-container {
                width: 700px;
                height: 500px;
                border: 1px grey solid;
                display: inline-block;
            }
            
            #drop-container {
                width: 700px;
                height: 613px;
                border: 1px grey solid;
                display: block;
            }
            #draggable {
                left: 5px;
                background-color: blue;
            }
            #draggable-vert {
                left: 15px;
                background-color:aqua;
            }
            #draggable-hor {
                left: 25px;
                background-color:aquamarine;
            }
            
            #resizable {
                left: 5px;
                background-color: blue;
            }
            #resizable-vert {
                left: 15px;
                background-color:aqua;
            }
            #resizable-hor {
                left: 25px;
                background-color:aquamarine;
            }
            
            .drag-shape {
                text-align: center;
                position: relative;
                top: 5px;
                float: left;
                height: 150px;
                width: 150px;
                border: 1px solid black;
            }
            
            .drop-shape {
                text-align: center;
                position: relative;
                top: 5px;
                float: left;
                height: 150px;
                width: 150px;
                border: 1px solid black;
                background-color:aqua;
                z-index: 2;
            }
            
            #drop-1 {
                left: 5px;
                background-color:aqua;
            }
            #drop-2 {
                left: 15px;
                background-color:dodgerblue;
            }
            #drop-3 {
                left: 25px;
                background-color:darkcyan;
            }
            
            #target-shape {
                text-align: center;
                margin-top: 5px;
                position: relative;
                left:5px;
                top: 300px;
                z-index: 1;
                
                
                height: 300px;
                width: 300px;
                border: 1px solid black;
                background-color:aquamarine;
            }
            
            
            
            .resize-shape {
                text-align: center;
                margin-top: 5px;
                float: left;
                height: 150px;
                width: 150px;
                border: 1px solid black;
            }
            
            span {
                position: relative;
                top: 40%;
            }
            
            #target-shape span {
                top:-5%;
                right: 3%;
            }
            
            #drag-refresh {
                margin-top: 10px;
                margin-left: 10px;
            }
            
            #resize-refresh {
                margin-top: 10px;
                margin-left: 10px;
            }
            
            body {
                font-family: sans-serif;
            }
            
            button {
                width: 80px;
                height: 30px;
                font-size: 110%;
                font-weight: bold;
                border-radius: 10px;
                background-color: aquamarine;
            }
            
            h1 {
                text-decoration: underline;
                margin: 0 auto;
            }
            
            #theme-button {
                width: 200px;
            }
            #theme-button-1 {
                width: 200px;
            }
            
            .li-1 {
                text-align: center;
                height: 40px;
                width: 200px;
                border: 1px solid black;
                border-radius: 5px;
                list-style-type: none;
                background-color: beige;
            }
            
            .li-1 span {
                vertical-align: center;
            }
            
            .num-span {
                position: relative;
                top: 0px;
            }
            
            #sortable-list {
                position: relative;
                left: -35px;
            }
            
            #sortable-list-1 {
                display: none;
                list-style-type: none;
                margin: 0;
                padding: 0;
                width: 60%;
            }
            #sortable-list-1 li { margin: 0 3px 3px 3px; padding: 0.4em; padding-left: 1.5em; font-size: 1.4em; height: 18px; }
            #sortable-list-1 li span { position: absolute; margin-left: -1.3em; }
            }
        </style>

    </head>

    <body>
        <h1>jQuery User Interface Plug-in</h1>
        <br>
        <h2>Here are the draggable objects:</h2>
        <div id="drag-container">
            <div id="draggable" class="drag-shape"><span>Anywhere</span></div>
            <div id="draggable-vert" class="drag-shape"><span>Only vertically</span></div>
            <div id="draggable-hor" class="drag-shape"><span>Only horizontally</span></div>
        </div>
        <br>
        <button id="drag-refresh">Refresh</button>
        
        <br>
        <h2>Here are the resizable objects:</h2>
        <div id="resize-container">
            <div id="resizable" class="resize-shape"><span>Anyhow</span></div>
            <div id="resizable-vert" class="resize-shape"><span>Only vertically</span></div>
            <div id="resizable-hor" class="resize-shape"><span>Only horizontally</span></div>
        </div>
        <br>
        <button id="resize-refresh">Refresh</button>
        
        <br>
        <h2>Here is the droppable object:</h2>
        <div id="drop-container">
            <div class="drop-shape" id="drop-1"><span>Drag me to my target</span></div>
            <div class="drop-shape" id="drop-2"><span>Drag me to my target</span></div>
            <div class="drop-shape" id="drop-3"><span>Drag me to my target</span></div>
            <div id="target-shape"><span>Drop here</span></div>
        </div>
        <br>
        <button id="drop-refresh">Refresh</button>
        
        <br><br>
        <h2><u>Widgets:</u></h2>
        <h2>Accordione widget</h2>
        <div id="accordion">
            <h3>Section 1</h3>
            <div>
                <p>Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion. Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet.</p>
            </div>
            <h3>Section 2</h3>
            <div>
                <p>Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.</p>
            </div>
            <h3>Section 3</h3>
            <div>
                <p>Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her.</p>
                
                <ul>
                  <li>List item one</li>
                  <li>List item two</li>
                  <li>List item three</li>
                </ul>
            </div>
            <h3>Section 4</h3>
            <div>
                <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. Up help home head spot an he room in.</p>
            </div>
            <h3>Section 5</h3>
            <div>
                <p>So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in. Sex stood tried walls manor truth shy and three his. Their to years so child truth. Honoured peculiar families sensible up likewise by on in.</p>
            </div>
        </div>
        <br>
        <button id="theme-button">Change the theme</button>
        <br>
        <h2>Sortable list</h2>
        <ul id="sortable-list">
            <li class="li-1"><span><span class="num-span">8.</span> Wordpress</span></li>
            <li class="li-1"><span><span class="num-span">2.</span> CSS</span></li>
            <li class="li-1"><span><span class="num-span">5.</span> PHP</span></li>
            <li class="li-1"><span><span class="num-span">1.</span> HTML</span></li>
            <li class="li-1"><span><span class="num-span">6.</span> MySQL</span></li>
            <li class="li-1"><span><span class="num-span">3.</span> JavaScript</span></li>
            <li class="li-1"><span><span class="num-span">7.</span> Bootstrap</span></li>
            <li class="li-1"><span><span class="num-span">4.</span> jQuery</span></li>
            <li class="li-1"><span><span class="num-span">9.</span> Python</span></li>
        </ul>
        <ul id="sortable-list-1">
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>8. Wordpress</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>2. CSS</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>5. PHP</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>1. HTML</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>6. MySQL</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>3. JavaScript</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>7. Bootstrap</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>4. jQuery</li>
          <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>9. Python</li>
        </ul>
        <button id="theme-button-1">Change the theme</button>
        
        
        
        
    </body>
    
    <script type="text/javascript">
        $("#theme-button").click(function() {
            if ($("link").attr("href") == "jquery-ui-1/jquery-ui.css") {
                $("link").attr("href", "jquery-ui/jquery-ui.css");
            } else {
                $("link").attr("href", "jquery-ui-1/jquery-ui.css");
            }
        })
        
        $("#theme-button-1").click(function() {
            if ($("#sortable-list-1").css("display") == "none") {
                $("#sortable-list-1").css("display", "block");
                $("#sortable-list").css("display", "none");
            } else {
                $("#sortable-list-1").css("display", "none");
                $("#sortable-list").css("display", "block");
            }
        })
        
        $(function() {
            $( ".drag-shape" ).draggable({ containment: "parent" });
            $("#draggable-vert").draggable({ axis: "y" });
            $("#draggable-hor").draggable({ axis: "x" });
            
        });
        
        $( function() {
            $(".resize-shape" ).resizable({ 
                containment: "parent",
                grid: 10
            });
            $("#resizable-hor").resizable({
                handles: 'e, w'
            });
            
            $("#resizable-vert").resizable({
                handles: 's, n'
            });
        } );
        
        
        $( function() {
            $("#resize-container" ).resizable({ 
                containment: "parent",
                grid: 10,
                alsoResize: ".resize-shape"
            });
            $("#resizable-hor").resizable({
                handles: 'e'
            });
            
            $("#resizable-vert").resizable({
                handles: 's'
            });
        } );
        
        var dropped = false;
        $( function() {
            $( ".drop-shape" ).draggable();
            $("#drop-container").droppable({
                drop: function(event, ui) {
                    if (dropped == true) {
                        dropped = false;
                        $("#target-shape").
                        css("background-color", "aquamarine").
                        css("border", "1px solid black");

                        $("#target-shape").
                        find("span").html("Drop here").
                        css("top", "40%");
                    }
                }
            });
            $( "#target-shape" ).droppable({
              drop: function( event, ui ) {
                  $( this ).
                  find("span").html("Dropped!");
                  $( this ).
                  find("span").css("top", "-40%");
                  $(this).
                  css("background-color", ui.draggable.css("background-color")).
                  css("border", "3px solid red");
                  dropped = true;  
              }
            });
          } );

        $("#drag-refresh").click(function() {
            $("#draggable").
            css("top", "5px").
            css("left", "5px");
            
            $("#draggable-vert").
            css("top", "5px").
            css("left", "15px");
            
            $("#draggable-hor").
            css("top", "5px").
            css("left", "25px");
        });
        
        $("#resize-refresh").click(function() {
            $(".resize-shape").
            css("height", "150px").
            css("width", "150px");
            
            $("#resize-container").
            css("width", "700px").
            css("height", "500px");
            
        });
        
        $("#drop-refresh").click(function() {
            $("#target-shape").
            css("background-color", "aquamarine").
            css("border", "1px solid black");

            $("#target-shape").
            find("span").html("Drop here").
            css("top", "40%");
            
            $(".drop-shape").
            css("top", "5px");
            
            $("#drop-1").
            css("left", "5px");
            $("#drop-2").
            css("left", "15px");
            $("#drop-3").
            css("left", "25px");
            
        });
        
        $(function() {
            var icons = {
              header: "ui-icon-circle-arrow-e",
              activeHeader: "ui-icon-circle-arrow-s"
            };
            
            $("#accordion").accordion({
//                collapsible: false,??
                icons: icons
            });
        })
        
        $(function() {
            $("#sortable-list").sortable();
            $("#sortable-list").disableSelection();
            $("#sortable-list-1").sortable();
            $("#sortable-list-1").disableSelection();
            
        });
        
        
        
    </script>
</html>
