/*
 * Create by weiganyi on 20131107
 */

TOOLBAR_HTML = " \
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
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"7\" class=\"me_font_menu_link\">Title 1</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"6\" class=\"me_font_menu_link\">Title 2</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"5\" class=\"me_font_menu_link\">Title 3</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"4\" class=\"me_font_menu_link\">Title 4</a> \
    </li> \
    <li class=\"me_font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"3\" class=\"me_font_menu_link\">Text</a> \
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
        <td class=\"me_image_menu_label\"><label>picture address: <label/></td> \
        <td class=\"me_image_menu_content\"><input type=\"text\" id=\"me_image_address\"/></td> \
    </tr> \
    <tr class=\"me_image_menu_row\"> \
        <td class=\"me_image_menu_button\"><input type=\"button\" id=\"me_image_insert\"/ value=\"Insert\"></td> \
        <td class=\"me_image_menu_button\"><input type=\"button\" id=\"me_image_clear\"/ value=\"Clear\"></td> \
    </tr> \
</table> \
</span> \
<a href=\"#\" title=\"RemoveFormat\" btn_action=\"RemoveFormat\" class=\"me_command\"> \
    <img src=\"images/removeformat.gif\"></img></a> \
<a href=\"#\" title=\"emoticon\" btn_action=\"emoticon\" class=\"me_command\"> \
    <img src=\"images/emoticon.gif\"></img></a> \
<a href=\"#\" title=\"table\" btn_action=\"table\" class=\"me_command\"> \
    <img src=\"images/table.gif\"></img></a> \
</div> \
";

jQuery.fn.mini_editor = 
{
    options_list : {lang:"EN"},

    editor : null,

    win : null,
    doc : null,

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

    enable_editor : function(editor)
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

        return this;
    },

    decorate_font_menu_link : function(toolbar)
    {
        if (toolbar)
        {
            link_list = toolbar.find(".me_font_menu_link");
            length = link_list.length;
            for (var idx=0; idx<length; idx++)
            {
                //convert html fragment to jquery object
                obj = $(link_list[idx]);
                size = obj.attr("menu_size");
                //calculate the px of the font menu link text
                str_size = String(Number(size)*2+10) + "px";
                obj.css("font-size", str_size);
            }
        }

        return this;
    },

    command_mouseenter : function()
    {
        obj = $(this);
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
        obj = $(this);
        param = null;

        btn_action = obj.attr("btn_action");

        //prompt user to input link address
        if (btn_action == "CreateLink")
        {
            param = obj.mini_editor.link_prompt();
        }

        win = obj.mini_editor.win;
        doc = obj.mini_editor.doc;

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
        obj = $(this);
        obj.css("background-color", "gray");

        return this;
    },

    font_menu_item_mouseleave : function()
    {
        obj = $(this);
        obj.css("background-color", "white");

        return this;
    },

    font_menu_link_click : function()
    {
        //this pointer is the html fragment that been clicked
        obj = $(this);

        menu_action = obj.attr("menu_action");
        menu_size = obj.attr("menu_size");

        win = obj.mini_editor.win;
        doc = obj.mini_editor.doc;

        win.focus();
        doc.execCommand(menu_action, false, menu_size);
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
        image_address = $("#me_image_address").val();

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
        obj = $(this);

        win = obj.mini_editor.win;
        doc = obj.mini_editor.doc;

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

    link_prompt : function()
    {
        value = prompt("please input the link address:", "http://");

        return value;
    },

    padding : null
};

jQuery.fn.mini_editor_create = function(options)
{
    //save options
    this.mini_editor.save_options(options);

    //enable this iframe to edit
    this.mini_editor.enable_editor(this);

    //create toolbar object
    toolbar = $(TOOLBAR_HTML);

    //decorate the font menu link
    this.mini_editor.decorate_font_menu_link(toolbar);

    //register event function
    toolbar.find(".me_command").bind("mouseenter", this.mini_editor.command_mouseenter);
    toolbar.find(".me_command").bind("mouseleave", this.mini_editor.command_mouseleave);

    toolbar.find(".me_command").bind("click", this.mini_editor.command_click);

    toolbar.find(".me_font_menu").bind("mouseenter", this.mini_editor.font_menu_mouseenter);
    toolbar.find(".me_font_menu").bind("mouseleave", this.mini_editor.font_menu_mouseleave);

    toolbar.find(".me_font_menu_item").bind("mouseenter", this.mini_editor.font_menu_item_mouseenter);
    toolbar.find(".me_font_menu_item").bind("mouseleave", this.mini_editor.font_menu_item_mouseleave);

    toolbar.find(".me_font_menu_link").bind("click", this.mini_editor.font_menu_link_click);

    toolbar.find(".me_image_menu").bind("mouseenter", this.mini_editor.image_menu_mouseenter);
    toolbar.find(".me_image_menu").bind("mouseleave", this.mini_editor.image_menu_mouseleave);

    toolbar.find("#me_image_insert").bind("click", this.mini_editor.image_insert_click);
    toolbar.find("#me_image_clear").bind("click", this.mini_editor.image_clear_click);

    //add toolbar before the iframe
    this.before(toolbar);

    return this;
}

