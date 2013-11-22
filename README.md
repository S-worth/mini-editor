Introduce
=====
This project is a web text editor for the javascript, it can be embedded in any html page as a text editor.<br/>
It has some useful edit function, such as: bold、italic、underline、strikethrough、font、orderedlist、unorderedlist、indent、outdent、horizontalrule、link、unlink、hostimage、nwkimage、removeformat、emoticon、table, etc.<br/>
It's dependent on the jQuery library, it had been test under three broswers: IE8、chrome31 and Firefox24, it can work well, so it has a good compatibility.<br/>

Directory
=====
images - toolbar icon<br/>
images/emoticons - emoticon icon in toolbar<br/>
lang - contury language definition in GUI<br/>

Usage
=====
First you need link the jquery and mini_editor files into your html page:<br/>
\<script type="text/javascript" src="jquery-1.10.1.js"\>\</script\><br/>
\<link type="text/css" rel="stylesheet" href="mini_editor.css"/\><br/>
\<script type="text/javascript" src="mini_editor.js"\>\</script\><br/>

The second, you can set a frame into your html page:<br/>
\<p\><br/>
	\<iframe src="" frameborder="0" id="editor" name="editor" width="800" height="300" style="border:1px solid #ccc;"\>\</iframe\><br/>
\</p\><br/>

Third you need set a javasript fragment under the frame html:<br/>
\<script type="text/javascript"\><br/>
    $("#editor").mini_editor_create({lang:"ch", <br/>
                                    image_page:"http://172.125.102.146/image.php",<br/>
                                    text_page:"http://172.125.102.146/text1.php"});<br/>
\</script\><br/>

After do above steps, the editor can work in your html page.<br/>

Design
=====
Please refer to my blog(Chinese):<br/>
http://blog.csdn.net/weiganyi/article/details/16881213<br/>
