/*
 * Create by weiganyi on 20131107
 */

TOOLBAR_HTML = " \
<div class=\"toolbar\"> \
<a href=\"#\" title=\"Bold\" btn_action=\"Bold\" class=\"button\"> \
    <img src=\"images/bold.gif\"></img></a> \
<a href=\"#\" title=\"Italic\" btn_action=\"Italic\" class=\"button\"> \
    <img src=\"images/italic.gif\"></img></a> \
<a href=\"#\" title=\"Underline\" btn_action=\"Underline\" class=\"button\"> \
    <img src=\"images/underline.gif\"></img></a> \
<a href=\"#\" title=\"StrikeThrough\" btn_action=\"StrikeThrough\" class=\"button\"> \
    <img src=\"images/strikethrough.gif\"></img></a> \
<span class=\"font_menu\"> \
<a href=\"#\" class=\"font_menu_head button\"> \
    <img src=\"images/font.gif\"></img></a> \
<ul class=\"font_menu_list\"> \
    <li class=\"font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"7\" class=\"font_menu_link\">Title 1</a> \
    </li> \
    <li class=\"font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"6\" class=\"font_menu_link\">Title 2</a> \
    </li> \
    <li class=\"font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"5\" class=\"font_menu_link\">Title 3</a> \
    </li> \
    <li class=\"font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"4\" class=\"font_menu_link\">Title 4</a> \
    </li> \
    <li class=\"font_menu_item\"> \
        <a href=\"#\" menu_action=\"FontSize\" menu_size=\"3\" class=\"font_menu_link\">Text</a> \
    </li> \
</ul> \
</span> \
<a href=\"#\" title=\"InsertOrderedList\" btn_action=\"InsertOrderedList\" class=\"button\"> \
    <img src=\"images/orderedlist.gif\"></img></a> \
<a href=\"#\" title=\"InsertUnorderedList\" btn_action=\"InsertUnorderedList\" class=\"button\"> \
    <img src=\"images/unorderedlist.gif\"></img></a> \
<a href=\"#\" title=\"Indent\" btn_action=\"Indent\" class=\"button\"> \
    <img src=\"images/indent.gif\"></img></a> \
<a href=\"#\" title=\"Outdent\" btn_action=\"Outdent\" class=\"button\"> \
    <img src=\"images/outdent.gif\"></img></a> \
<a href=\"#\" title=\"InsertHorizontalRule\" btn_action=\"InsertHorizontalRule\" class=\"button\"> \
    <img src=\"images/horizontalrule.gif\"></img></a> \
<a href=\"#\" title=\"CreateLink\" btn_action=\"CreateLink\" class=\"button\"> \
    <img src=\"images/link.gif\"></img></a> \
<a href=\"#\" title=\"Unlink\" btn_action=\"Unlink\" class=\"button\"> \
    <img src=\"images/unlink.gif\"></img></a> \
<a href=\"#\" title=\"InsertImage\" btn_action=\"InsertImage\" class=\"button\"> \
    <img src=\"images/image.gif\"></img></a> \
<a href=\"#\" title=\"RemoveFormat\" btn_action=\"RemoveFormat\" class=\"button\"> \
    <img src=\"images/removeformat.gif\"></img></a> \
<a href=\"#\" title=\"emoticon\" btn_action=\"emoticon\" class=\"button\"> \
    <img src=\"images/emoticon.gif\"></img></a> \
<a href=\"#\" title=\"table\" btn_action=\"table\" class=\"button\"> \
    <img src=\"images/table.gif\"></img></a> \
</div> \
";

jQuery.fn.mini_editor = 
{
    options_list : {lang:"EN"},

    win : 0,
    doc : 0,

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
        //this pointer is the mini_editor object
        this.win = editor[0].contentWindow;
        this.doc = this.win.document;

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
            link_list = toolbar.find(".font_menu_link");
            length = link_list.length;
            for (var idx=0; idx<length; idx++)
            {
                obj = $(link_list[idx]);
                size = obj.attr("menu_size");
                str_size = String(Number(size)*5+5) + "px";
                obj.css("font-size", str_size);
            }
        }

        return this;
    },

    button_mouseenter : function()
    {
        obj = $(this);
        obj.css("border-style", "solid");

        return this;
    },

    button_mouseleave : function()
    {
        obj = $(this);
        obj.css("border-style", "none");

        return this;
    },

    font_menu_mouseenter : function()
    {
        $(".font_menu_list").css("display", "block");

        return this;
    },

    font_menu_mouseleave : function()
    {
        $(".font_menu_list").css("display", "none");

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

    button_click : function()
    {
        //this pointer is the html fragment that been clicked
        obj = $(this);

        btn_action = obj.attr("btn_action");

        win = obj.mini_editor.win;
        doc = obj.mini_editor.doc;

        win.focus();
        doc.execCommand(btn_action, false, null);
        win.focus();

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

        return this;
    },

    padding : {}
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
    toolbar.find(".button").bind("mouseenter", this.mini_editor.button_mouseenter);
    toolbar.find(".button").bind("mouseleave", this.mini_editor.button_mouseleave);

    toolbar.find(".font_menu").bind("mouseenter", this.mini_editor.font_menu_mouseenter);
    toolbar.find(".font_menu").bind("mouseleave", this.mini_editor.font_menu_mouseleave);

    toolbar.find(".font_menu_item").bind("mouseenter", this.mini_editor.font_menu_item_mouseenter);
    toolbar.find(".font_menu_item").bind("mouseleave", this.mini_editor.font_menu_item_mouseleave);

    toolbar.find(".button").bind("click", this.mini_editor.button_click);

    toolbar.find(".font_menu_link").bind("click", this.mini_editor.font_menu_link_click);

    //add toolbar before the iframe
    this.before(toolbar);

    return this;
}

