/*
 * Create by weiganyi on 20131107
 */

var TOOLBAR_HTML = " \
<div class=\"me_toolbar\"> \
<a href=\"#\" title=\"Bold\" btn_action=\"Bold\" class=\"me_command\"> \
    <img src=\"images/bold.gif\"></img></a> \
<a href=\"#\" title=\"Italic\" btn_action=\"Italic\" class=\"me_command\"> \
    <img src=\"images/italic.gif\"></img></a> \
<a href=\"#\" title=\"Underline\" btn_action=\"Underline\" class=\"me_command\"> \
    <img src=\"images/underline.gif\"></img></a> \
<a href=\"#\" title=\"StrikeThrough\" btn_action=\"StrikeThrough\" class=\"me_command\"> \
    <img src=\"images/strikethrough.gif\"></img></a> \
<span class=\"me_font_menu\"> \
<a href=\"#\" class=\"me_font_menu_head me_command\"> \
    <img src=\"images/font.gif\"></img></a> \
<ul class=\"me_font_menu_list\"> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" font_size=\"7\" class=\"me_font_menu_link\">Title 1</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" font_size=\"6\" class=\"me_font_menu_link\">Title 2</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" font_size=\"5\" class=\"me_font_menu_link\">Title 3</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" font_size=\"4\" class=\"me_font_menu_link\">Title 4</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" font_size=\"3\" class=\"me_font_menu_link\">Text</a> \
    </li> \
</ul> \
</span> \
<a href=\"#\" title=\"InsertOrderedList\" btn_action=\"InsertOrderedList\" class=\"me_command\"> \
    <img src=\"images/orderedlist.gif\"></img></a> \
<a href=\"#\" title=\"InsertUnorderedList\" btn_action=\"InsertUnorderedList\" class=\"me_command\"> \
    <img src=\"images/unorderedlist.gif\"></img></a> \
<a href=\"#\" title=\"Indent\" btn_action=\"Indent\" class=\"me_command\"> \
    <img src=\"images/indent.gif\"></img></a> \
<a href=\"#\" title=\"Outdent\" btn_action=\"Outdent\" class=\"me_command\"> \
    <img src=\"images/outdent.gif\"></img></a> \
<a href=\"#\" title=\"InsertHorizontalRule\" btn_action=\"InsertHorizontalRule\" class=\"me_command\"> \
    <img src=\"images/horizontalrule.gif\"></img></a> \
<a href=\"#\" title=\"CreateLink\" btn_action=\"CreateLink\" class=\"me_command\"> \
    <img src=\"images/link.gif\"></img></a> \
<a href=\"#\" title=\"Unlink\" btn_action=\"Unlink\" class=\"me_command\"> \
    <img src=\"images/unlink.gif\"></img></a> \
<span class=\"me_image_menu\"> \
<a href=\"#\" class=\"me_image_menu_head me_command\"> \
    <img src=\"images/image.gif\"></img></a> \
<table class=\"me_image_menu_table\"> \
    <tr class=\"me_image_menu_row\"> \
        <td class=\"me_image_menu_label\">picture address: </td> \
        <td class=\"me_image_menu_content\"><input type=\"text\" id=\"me_image_address\" style=\"width:300px;\"/></td> \
    </tr> \
    <tr class=\"me_image_menu_row\"> \
        <td class=\"me_image_menu_button\"><input type=\"button\" id=\"me_image_insert\"/ value=\"Insert\"></td> \
        <td class=\"me_image_menu_button\"><input type=\"button\" id=\"me_image_clear\"/ value=\"Clear\"></td> \
    </tr> \
</table> \
</span> \
<a href=\"#\" title=\"RemoveFormat\" btn_action=\"RemoveFormat\" class=\"me_command\"> \
    <img src=\"images/removeformat.gif\"></img></a> \
<span class=\"me_emoticon_menu\"> \
<a href=\"#\" class=\"me_emoticon_menu_head me_command\"> \
    <img src=\"images/emoticon.gif\"></img></a> \
<table class=\"me_emoticon_menu_table\"> \
    <tr class=\"me_emoticon_menu_row\"> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/1.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/2.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/3.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/4.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/5.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/6.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/7.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/8.gif\"></img></a> \
        </td> \
    </tr> \
    <tr class=\"me_emoticon_menu_row\"> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/9.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/10.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/11.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/12.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/13.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/14.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/15.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/16.gif\"></img></a> \
        </td> \
    </tr> \
    <tr class=\"me_emoticon_menu_row\"> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/17.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/18.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/19.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/20.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/21.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/22.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/23.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/24.gif\"></img></a> \
        </td> \
    </tr> \
    <tr class=\"me_emoticon_menu_row\"> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/25.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/26.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/27.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/28.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/29.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/30.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/31.gif\"></img></a> \
        </td> \
        <td class=\"me_emoticon_menu_cell\"> \
            <a href=\"#\" menu_action=\"InsertImage\" class=\"me_emoticon_menu_link\"> \
                <img src=\"images/emoticons/32.gif\"></img></a> \
        </td> \
    </tr> \
</table> \
</span> \
<span class=\"me_table_menu\"> \
<a href=\"#\" class=\"me_table_menu_head me_command\"> \
    <img src=\"images/table.gif\"></img></a> \
<table class=\"me_table_menu_table\"> \
    <tr class=\"me_table_menu_row\"> \
        <td class=\"me_table_menu_label\">row number: </td> \
        <td class=\"me_table_menu_content\"><input type=\"text\" id=\"me_table_row\" style=\"width:100px;\"/></td> \
    </tr> \
    <tr class=\"me_table_menu_row\"> \
        <td class=\"me_table_menu_label\">column number: </td> \
        <td class=\"me_table_menu_content\"><input type=\"text\" id=\"me_table_column\" style=\"width:100px;\"/></td> \
    </tr> \
    <tr class=\"me_table_menu_row\"> \
        <td class=\"me_table_menu_label\">width: </td> \
        <td class=\"me_table_menu_content\"><input type=\"text\" id=\"me_table_width\" style=\"width:100px;\"/></td> \
    </tr> \
    <tr class=\"me_table_menu_row\"> \
        <td class=\"me_table_menu_label\">height: </td> \
        <td class=\"me_table_menu_content\"><input type=\"text\" id=\"me_table_height\" style=\"width:100px;\"/></td> \
    </tr> \
    <tr class=\"me_table_menu_row\"> \
        <td class=\"me_table_menu_label\">border width: </td> \
        <td class=\"me_table_menu_content\"><input type=\"text\" id=\"me_table_border\" style=\"width:100px;\"/></td> \
    </tr> \
    <tr class=\"me_table_menu_row\"> \
        <td class=\"me_table_menu_button\"><input type=\"button\" id=\"me_table_insert\"/ value=\"Insert\"></td> \
        <td class=\"me_table_menu_button\"><input type=\"button\" id=\"me_table_clear\"/ value=\"Clear\"></td> \
    </tr> \
</table> \
</span> \
</div> \
";

jQuery.fn.mini_editor = 
{
    options_list : {lang:"en"},

    editor : null,

    win : null,
    doc : null,

    is_msie: false,
    is_firefox: false,
    is_chrome: false,

    save_options : function(options)
    {
        if (options)
        {
            for (var name in options)
            {
                this.options_list[name] = options[name];
            }
        }

        return this;
    },

    init_editor : function(editor)
    {
        this.editor = editor;

        //this pointer is the mini_editor object
        this.win = editor[0].contentWindow;
        this.doc = this.win.document;

        //set doc to editable
        this.doc.designMode = 'On';
        this.doc.contentEditor = true;

        this.doc.open();
        this.doc.close();
        this.win.focus();

        //check browser type
        var broswer = navigator.userAgent;
        if (broswer.search(/msie/gi) != -1)
        {
            this.is_msie = true;
        }
        else if (broswer.search(/firefox/gi) != -1)
        {
            this.is_firefox = true;
        }
        else if (broswer.search(/chrome/gi) != -1)
        {
            this.is_chrome = true;
        }

        //import the contury js
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = "lang/"  + this.options_list["lang"] + ".js";
        script.charset = "UTF-8";
        script.type = "text/javascript";
        script.onload = script.onreadystatechange = function ()
        {
            if (!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete')
            {
                $(this).mini_editor.add_toolbar();
                script.onload = script.onreadystatechange = null;
            };
        };
        head.appendChild(script);

        return this;
    },

    add_toolbar : function()
    {
        //apply the contury language configed for all toolbar display
        TOOLBAR_HTML = this.apply_contury_language(TOOLBAR_HTML);

        //create toolbar object
        var toolbar = $(TOOLBAR_HTML);

        //decorate the font menu link
        this.decorate_font_menu_link(toolbar);

        //register event function
        //me_command event
        toolbar.find(".me_command").bind("mouseenter", this.command_mouseenter);
        toolbar.find(".me_command").bind("mouseleave", this.command_mouseleave);

        toolbar.find(".me_command").bind("click", this.command_click);

        //me_font_menu event
        toolbar.find(".me_font_menu").bind("mouseenter", this.font_menu_mouseenter);
        toolbar.find(".me_font_menu").bind("mouseleave", this.font_menu_mouseleave);

        toolbar.find(".me_font_menu_item").bind("mouseenter", this.font_menu_item_mouseenter);
        toolbar.find(".me_font_menu_item").bind("mouseleave", this.font_menu_item_mouseleave);

        toolbar.find(".me_font_menu_link").bind("click", this.font_menu_link_click);

        //me_image_menu event
        toolbar.find(".me_image_menu").bind("mouseenter", this.image_menu_mouseenter);
        toolbar.find(".me_image_menu").bind("mouseleave", this.image_menu_mouseleave);

        toolbar.find("#me_image_insert").bind("click", this.image_insert_click);
        toolbar.find("#me_image_clear").bind("click", this.image_clear_click);

        //me_emoticon_menu event
        toolbar.find(".me_emoticon_menu").bind("mouseenter", this.emoticon_menu_mouseenter);
        toolbar.find(".me_emoticon_menu").bind("mouseleave", this.emoticon_menu_mouseleave);

        toolbar.find(".me_emoticon_menu_cell").bind("mouseenter", this.emoticon_menu_cell_mouseenter);
        toolbar.find(".me_emoticon_menu_cell").bind("mouseleave", this.emoticon_menu_cell_mouseleave);

        toolbar.find(".me_emoticon_menu_link").bind("click", this.emoticon_menu_link_click);

        //me_table_menu event
        toolbar.find(".me_table_menu").bind("mouseenter", this.table_menu_mouseenter);
        toolbar.find(".me_table_menu").bind("mouseleave", this.table_menu_mouseleave);

        toolbar.find("#me_table_insert").bind("click", this.table_insert_click);
        toolbar.find("#me_table_clear").bind("click", this.table_clear_click);

        //add toolbar before the iframe
        this.editor.before(toolbar);
    },

    apply_contury_language : function(toolbar_html)
    {
        if (toolbar_html)
        {
            var replace_value = "";

            replace_value = "title=\"" + contury_lang["Bold"] + "\"";
            toolbar_html = toolbar_html.replace(/title="Bold"/g, replace_value);
            replace_value = "title=\"" + contury_lang["Italic"] + "\"";
            toolbar_html = toolbar_html.replace(/title="Italic"/g, replace_value);
            replace_value = "title=\"" + contury_lang["Underline"] + "\"";
            toolbar_html = toolbar_html.replace(/title="Underline"/g, replace_value);
            replace_value = "title=\"" + contury_lang["StrikeThrough"] + "\"";
            toolbar_html = toolbar_html.replace(/title="StrikeThrough"/g, replace_value);
            replace_value = "title=\"" + contury_lang["InsertOrderedList"] + "\"";
            toolbar_html = toolbar_html.replace(/title="InsertOrderedList"/g, replace_value);
            replace_value = "title=\"" + contury_lang["InsertUnorderedList"] + "\"";
            toolbar_html = toolbar_html.replace(/title="InsertUnorderedList"/g, replace_value);
            replace_value = "title=\"" + contury_lang["Indent"] + "\"";
            toolbar_html = toolbar_html.replace(/title="Indent"/g, replace_value);
            replace_value = "title=\"" + contury_lang["Outdent"] + "\"";
            toolbar_html = toolbar_html.replace(/title="Outdent"/g, replace_value);
            replace_value = "title=\"" + contury_lang["InsertHorizontalRule"] + "\"";
            toolbar_html = toolbar_html.replace(/title="InsertHorizontalRule"/g, replace_value);
            replace_value = "title=\"" + contury_lang["CreateLink"] + "\"";
            toolbar_html = toolbar_html.replace(/title="CreateLink"/g, replace_value);
            replace_value = "title=\"" + contury_lang["Unlink"] + "\"";
            toolbar_html = toolbar_html.replace(/title="Unlink"/g, replace_value);
            replace_value = "title=\"" + contury_lang["RemoveFormat"] + "\"";
            toolbar_html = toolbar_html.replace(/title="RemoveFormat"/g, replace_value);
        }

        return toolbar_html;
    },

    decorate_font_menu_link : function(toolbar)
    {
        if (toolbar)
        {
            var link_list = toolbar.find(".me_font_menu_link");
            var link_number = link_list.length;
            for (var idx=0; idx<link_number; idx++)
            {
                //convert html fragment to jquery object
                var obj = $(link_list[idx]);
                var font_size = obj.attr("font_size");
                //calculate the px of the font menu link text
                var str_size = String(Number(font_size)*2+10) + "px";
                obj.css("font-size", str_size);
            }
        }

        return this;
    },

    command_mouseenter : function()
    {
        var obj = $(this);
        obj.css("border-style", "solid");

        return this;
    },

    command_mouseleave : function()
    {
        obj = $(this);
        obj.css("border-style", "none");

        return this;
    },

    command_click : function()
    {
        //this pointer is the html fragment that been clicked
        var obj = $(this);
        var param = null;

        var btn_action = obj.attr("btn_action");

        //prompt user to input link address
        if (btn_action == "CreateLink")
        {
            param = obj.mini_editor.link_prompt();
        }

        var win = obj.mini_editor.win;
        var doc = obj.mini_editor.doc;

        win.focus();
        if (param)
        {
            doc.execCommand(btn_action, false, param);
        }
        else
        {
            doc.execCommand(btn_action, false, null);
        }
        win.focus();

        return this;
    },

    link_prompt : function()
    {
        var value = prompt("please input the link address:", "http://");

        return value;
    },

    font_menu_mouseenter : function()
    {
        $(".me_font_menu_list").css("display", "block");

        return this;
    },

    font_menu_mouseleave : function()
    {
        $(".me_font_menu_list").css("display", "none");

        return this;
    },

    font_menu_item_mouseenter : function()
    {
        var obj = $(this);
        obj.css("background-color", "gray");

        return this;
    },

    font_menu_item_mouseleave : function()
    {
        var obj = $(this);
        obj.css("background-color", "white");

        return this;
    },

    font_menu_link_click : function()
    {
        //this pointer is the html fragment that been clicked
        var obj = $(this);

        var menu_action = obj.attr("menu_action");
        var font_size = obj.attr("font_size");

        var win = obj.mini_editor.win;
        var doc = obj.mini_editor.doc;

        win.focus();
        doc.execCommand(menu_action, false, font_size);
        win.focus();

        //close the me_font_menu_list display
        $(".me_font_menu_list").css("display", "none");

        return this;
    },

    image_menu_mouseenter : function()
    {
        $(".me_image_menu_table").css("display", "block");

        return this;
    },

    image_menu_mouseleave : function()
    {
        $(".me_image_menu_table").css("display", "none");

        return this;
    },

    image_insert_click : function()
    {
        var image_address = $("#me_image_address").val();

        //translate char "\" to char "/"
        if (image_address.search(/\\/g) != -1)
        {
            image_address = image_address.replace(/\\/g, "/");
        }

        //append file:/// prefix before the absoulte path
        if (image_address.search(/(^[A-D]:)/g) != -1)
        {
            image_address = image_address.replace(/(^[A-D]:)/g, "file:///$1");
        }

        //this pointer is the html fragment that been clicked
        var obj = $(this);

        var win = obj.mini_editor.win;
        var doc = obj.mini_editor.doc;

        win.focus();
        doc.execCommand("InsertImage", false, image_address);
        win.focus();

        //close the me_image_menu_table display
        $(".me_image_menu_table").css("display", "none");

        return this;
    },

    image_clear_click : function()
    {
        $("#me_image_address").val("");

        //close the me_image_menu_table display
        $(".me_image_menu_table").css("display", "none");

        return this;
    },

    emoticon_menu_mouseenter : function()
    {
        $(".me_emoticon_menu_table").css("display", "block");

        return this;
    },

    emoticon_menu_mouseleave : function()
    {
        $(".me_emoticon_menu_table").css("display", "none");

        return this;
    },

    emoticon_menu_cell_mouseenter : function()
    {
        var obj = $(this);
        obj.css("border-style", "solid");

        return this;
    },

    emoticon_menu_cell_mouseleave : function()
    {
        var obj = $(this);
        obj.css("border-style", "none");

        return this;
    },

    emoticon_menu_link_click : function()
    {
        //this pointer is the html fragment that been clicked
        var obj = $(this);

        var win = obj.mini_editor.win;
        var doc = obj.mini_editor.doc;

        var img = obj.find("img");
        if (img)
        {
            var image_address = img.attr("src");
        }

        win.focus();
        doc.execCommand("InsertImage", false, image_address);
        win.focus();

        //close the me_emoticon_menu_table display
        $(".me_emoticon_menu_table").css("display", "none");

        return this;
    },

    table_menu_mouseenter : function()
    {
        $(".me_table_menu_table").css("display", "block");

        return this;
    },

    table_menu_mouseleave : function()
    {
        $(".me_table_menu_table").css("display", "none");

        return this;
    },

    table_insert_click : function()
    {
        //this pointer is the html fragment that been clicked
        var obj = $(this);

        var win = obj.mini_editor.win;
        var doc = obj.mini_editor.doc;

        var row = $("#me_table_row").val();
        var column = $("#me_table_column").val();
        var width = $("#me_table_width").val();
        var height = $("#me_table_height").val();
        var border = $("#me_table_border").val();

        win.focus();
        //get the select range object
        if (obj.mini_editor.is_msie == true)
        {
            var range = obj.mini_editor.doc.selection.createRange();
        }
        else if (obj.mini_editor.is_firefox == true || (obj.mini_editor.is_chrome == true))
        {
            var range = obj.mini_editor.doc.getSelection().getRangeAt(0);
        }
        else
        {
            return this;
        }

        //create the table object
        var table_object = $("<div><table></table></div>");
        for (idx=0; idx<row; idx++)
        {
            table_object.find("table").append("<tr></tr>");
        }
        for (idx=0; idx<column; idx++)
        {
            table_object.find("table").find("tr").append("<td></td>");
        }

        //set the table css
        table_object.find("table").css("border-collapse", "collapse");

        if (Number(width) >= 1)
        {
            var width_value = width+"px";
        }
        else
        {
            var width_value = width+"100px";
        }
        table_object.find("table").find("tr").find("td").css("width", width_value);

        if (Number(height) >= 1)
        {
            var height_value = height+"px";
        }
        else
        {
            var height_value = height+"20px";
        }
        table_object.find("table").find("tr").find("td").css("height", height_value);

        if (Number(border) >= 1)
        {
            var border_value = border+"px solid black";
        }
        else
        {
            var border_value = border+"1px solid black";
        }
        table_object.find("table").css("border", border_value);
        table_object.find("table").find("tr").css("border", border_value);
        table_object.find("table").find("tr").find("td").css("border", border_value);

        //insert the table object into the range
        if (obj.mini_editor.is_msie == true)
        {
            range.pasteHTML(table_object.html());
        }
        else if (obj.mini_editor.is_firefox == true || (obj.mini_editor.is_chrome == true))
        {
            range.insertNode(table_object.find("table")[0]);
        }
        win.focus();

        //close the me_table_menu_table display
        $(".me_table_menu_table").css("display", "none");

        return this;
    },

    table_clear_click : function()
    {
        $("#me_table_row").val("");
        $("#me_table_column").val("");
        $("#me_table_width").val("");
        $("#me_table_height").val("");
        $("#me_table_border").val("");
        $("#me_table_title").val("");

        //close the me_table_menu_table display
        $(".me_table_menu_table").css("display", "none");

        return this;
    },

    padding : null
};

jQuery.fn.mini_editor_create = function(options)
{
    //save options
    this.mini_editor.save_options(options);

    //initialize the iframe to editor
    this.mini_editor.init_editor(this);

    return this;
}

