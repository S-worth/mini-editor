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
<a href=\"#\" class=\"font_menu_head\"> \
    <img src=\"images/font.gif\"></img></a> \
<ul class=\"font_menu_list\"> \
    <li><a href=\"#\" class=\"font_menu_item\">Title 1</a></li> \
    <li><a href=\"#\" class=\"font_menu_item\">Title 2</a></li> \
    <li><a href=\"#\" class=\"font_menu_item\">Title 3</a></li> \
    <li><a href=\"#\" class=\"font_menu_item\">Title 4</a></li> \
    <li><a href=\"#\" class=\"font_menu_item\">Title 5</a></li> \
    <li><a href=\"#\" class=\"font_menu_item\">Text</a></li> \
</ul> \
</span> \
<a href=\"#\" title=\"Bold\" btn_action=\"Bold\" class=\"button\"> \
    <img src=\"images/bold.gif\"></img></a> \
<a href=\"#\" title=\"Bold\" btn_action=\"Bold\" class=\"button\"> \
    <img src=\"images/bold.gif\"></img></a> \
<a href=\"#\" title=\"Bold\" btn_action=\"Bold\" class=\"button\"> \
    <img src=\"images/bold.gif\"></img></a> \
<a href=\"#\" title=\"Bold\" btn_action=\"Bold\" class=\"button\"> \
    <img src=\"images/bold.gif\"></img></a> \
<a href=\"#\" title=\"Bold\" btn_action=\"Bold\" class=\"button\"> \
    <img src=\"images/bold.gif\"></img></a> \
</div> \
";

jQuery.fn.mini_editor = function()
{
    //enable this iframe to edit
    win = this[0].contentWindow;
    doc = win.document;
    doc.designMode = 'On';
    doc.contentEditor = true;
    doc.open();
    doc.close();
    win.focus();

    //create toolbar object
    toolbar = $(TOOLBAR_HTML);

    //register event function for the font_menu
    toolbar.find(".font_menu").mouseenter(function()
    {
        return $(".font_menu_list").css("display", "block");
    });
    toolbar.find(".font_menu").mouseleave(function()
    {
        return $(".font_menu_list").css("display", "none");
    });

    //add toolbar before the iframe
    this.before(toolbar);

    return this;
}

