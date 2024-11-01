(function() {
    tinymce.PluginManager.add('sta_mce_button', function(editor, url) {

        function renderColorPicker() {
            var ctrl = this, colors, color, html, last, rows, cols, x, y, i;

            colors = [
                      "#C91F37", "#DC3023", "#9D2933", "#CF000F", "#E68364", "#F22613", "#CF3A24", "#C3272B", "#8F1D21", "#D24D57", "#F08F90",  
                      "#F47983", "#DB5A6B", "#C93756", "#FCC9B9", "#FFB3A7", "#F62459", "#F58F84", "#875F9A", "#5D3F6A", "#89729E", "#763568",  
                      "#8D608C", "#A87CA0", "#5B3256", "#BF55EC", "#8E44AD", "#9B59B6", "#BE90D4", "#4D8FAC", "#5D8CAE", "#22A7F0", "#19B5FE",  
                      "#59ABE3", "#48929B", "#317589", "#89C4F4", "#4B77BE", "#1F4788", "#003171", "#044F67", "#264348", "#7A942E", "#8DB255",  
                      "#5B8930", "#6B9362", "#407A52", "#006442", "#87D37C", "#26A65B", "#26C281", "#049372", "#2ABB9B", "#16A085", "#36D7B7",  
                      "#03A678", "#4DAF7C", "#D9B611", "#F3C13A", "#F7CA18", "#E2B13C", "#F5D76E", "#F4D03F", "#FFA400", "#E08A1E", "#FFB61E",  
                      "#FAA945", "#FFA631", "#FFB94E", "#E29C45", "#F9690E", "#F5AB35", "#BFBFBF", "#BDC3C7", "#D2D7D3", "#757D75", "#ABB7B7",  
                      "#6C7A89", "#95A5A6", "#000000"
            ];

            html = '<table class="mce-grid mce-grid-border mce-colorbutton-grid sta-colurbotton" role="list" cellspacing="0"><tbody>';
            last = colors.length - 1;
            rows = editor.settings.textcolor_rows || 15;
            cols = editor.settings.textcolor_cols || 8;

            for (y = 0; y < rows; y++) {
                html += '<tr>';

                for (x = 0; x < cols; x++) {
                    i = y * cols + x;

                    if (i > last) {
                        html += '<td></td>';
                    } else {
                        color = colors[i];
                        html += (
                            '<td>' +
                                '<div id="' + ctrl._id + '-' + i + '"' +
                                    ' data-mce-color="' + color + '"' +
                                    ' role="option"' +
                                    ' tabIndex="-1"' +
                                    ' style="' + (color ? 'background-color: ' + color : '') + '"' +
                                    ' >' +
                                '</div>' +
                            '</td>'
                        );
                    }
                }

                html += '</tr>';
            }

            html += '</tbody></table>';

            return html;
        }

        function copy_color($value) {
            jQuery('.mce-sta-panel .mce-button-color-hidden').val($value);
            jQuery('.mce-sta-panel.mce-container .mce-colorbutton .mce-preview').css('background-color', $value);
        }

        function onPanelClick(e) {
            var buttonCtrl = this.parent(), value;
            copy_color(e.target.getAttribute('data-mce-color'));
            buttonCtrl.hidePanel();
        }



        editor.addButton('sta_mce_button', {
            title: 'Insert Simple Text Ad',
            image: url + '/icon.png',
            classes: 'sta-mce-popup',
            onclick: function() {
                editor.windowManager.open({
                    title: 'Insert Simple Text Ad',
                    classes: 'sta-panel',
                    body: [{
                        type: 'textbox',
                        name: 'headline',
                        label: 'Header',
                        value: ''
                    }, 
                    {
                        type: 'textbox',
                        name: 'message',
                        label: 'Message',
                        value: ''
                    },
                    {
                        type: 'textbox',
                        name: 'button_text',
                        label: 'Button Text',
                        value: ''
                    }, 
                    {
                        type: 'textbox',
                        name: 'button_url',
                        label: 'Button URL',
                        value: ''
                    }, 
                    {
                        type: 'textbox',
                        name: 'button_color_hidden',
                        classes: 'button-color-hidden',
                        hidden: true,
                        value: '#FC5E18'
                    },
                    {
                        type: 'label', 
                        text: 'Button Color:'
                    },
                    {
                        type: 'colorbutton', 
                        name: 'button_color', 
                        text: 'Button Color', 
                        classes: 'open',
                        panel: {
                            role: 'application',
                            ariaRemember: true,
                            html: renderColorPicker,
                            onclick: onPanelClick
                        }
                    },
                    {
                        type: 'listbox',
                        name: 'new_tab',
                        label: 'Open URL In New Window?',
                        'values': [
                            {text: 'Yes', value: 'true'},
                            {text: 'No', value: 'false'}
                        ]
                    }
 
                    ],
                    onsubmit: function(e) {
                        editor.insertContent(
                            '[simple_text_ad headline="' +
                            e.data.headline +
                            '" message="' +
                            e.data.message +
                            '" button_text="' +
                            e.data.button_text +
                            '" button_url="' +
                            e.data.button_url +
                            '" button_color="' +
                            e.data.button_color_hidden +
                            '" new_tab="' +
                            e.data.new_tab +
                            '"]'
                        );
                    }
                });
            }
        });
    });
})();