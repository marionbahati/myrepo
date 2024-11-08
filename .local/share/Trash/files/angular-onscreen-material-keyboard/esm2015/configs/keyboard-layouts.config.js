/*
 * README from http://www.greywyvern.com/code/javascript/keyboard.js
 * ------
 *
 * - Lay out each keyboard in rows of sub-arrays.  Each sub-array
 *   represents one key.
 *
 * - Each sub-array consists of four slots described as follows:
 *     example: ["a", "A", "\u00e1", "\u00c1"]
 *
 *          a) Normal character
 *          A) Character + Shift/Caps
 *     \u00e1) Character + Alt/AltGr/AltLk
 *     \u00c1) Character + Shift/Caps + Alt/AltGr/AltLk
 *
 *   You may include sub-arrays which are fewer than four slots.
 *   In these cases, the missing slots will be blanked when the
 *   corresponding modifier key (Shift or AltGr) is pressed.
 *
 * - If the second slot of a sub-array matches one of the following
 *   strings:
 *     "Tab", "Caps", "Shift", "Enter", "Bksp",
 *     "Alt" OR "AltGr", "AltLk"
 *   then the function of the key will be the following,
 *   respectively:
 *     - Insert a tab
 *     - Toggle Caps Lock (technically a Shift Lock)
 *     - Next entered character will be the shifted character
 *     - Insert a newline (textarea), or close the keyboard
 *     - Delete the previous character
 *     - Next entered character will be the alternate character
 *     - Toggle Alt/AltGr Lock
 *
 *   The first slot of this sub-array will be the text to display
 *   on the corresponding key.  This allows for easy localisation
 *   of key names.
 *
 * - Layout dead keys (diacritic + letter) should be added as
 *   property/value pairs of objects with hash keys equal to the
 *   diacritic.  See the "this.VKI_deadkey" object below the layout
 *   definitions.  In each property/value pair, the value is what
 *   the diacritic would change the property name to.
 *
 * - Note that any characters beyond the normal ASCII set should be
 *   entered in escaped Unicode format.  (eg \u00a3 = Pound symbol)
 *   You can find Unicode values for characters here:
 *     http://unicode.org/charts/
 *
 * - To remove a keyboard, just delete it, or comment it out of the
 *   source code. If you decide to remove the US International
 *   keyboard layout, make sure you change the default layout
 *   (this.VKI_kt) above so it references an existing layout.
 *
 * CREDITS
 * -------
 *
 * See http://www.greywyvern.com/code/javascript/keyboard for examples
 * and usage instructions.
 *
 * Version 1.49 - November 8, 2011
 *   - Don't display language drop-down if only one keyboard available
 *
 *   See full changelog at:
 *     http://www.greywyvern.com/code/javascript/keyboard.changelog.txt
 *
 * Keyboard Credits
 *   - Yiddish (Yidish Lebt) keyboard layout by Simche Taub (jidysz.net)
 *   - Urdu Phonetic keyboard layout by Khalid Malik
 *   - Yiddish keyboard layout by Helmut Wollmersdorfer
 *   - Khmer keyboard layout by Sovann Heng (km-kh.com)
 *   - Dari keyboard layout by Saif Fazel
 *   - Kurdish keyboard layout by Ara Qadir
 *   - Assamese keyboard layout by Kanchan Gogoi
 *   - Bulgarian BDS keyboard layout by Milen Georgiev
 *   - Basic Japanese Hiragana/Katakana keyboard layout by Damjan
 *   - Ukrainian keyboard layout by Dmitry Nikitin
 *   - Macedonian keyboard layout by Damjan Dimitrioski
 *   - Pashto keyboard layout by Ahmad Wali Achakzai (qamosona.com)
 *   - Armenian Eastern and Western keyboard layouts by Hayastan Project (www.hayastan.co.uk)
 *   - Pinyin keyboard layout from a collaboration with Lou Winklemann
 *   - Kazakh keyboard layout by Alex Madyankin
 *   - Danish keyboard layout by Verner KjÃ¦rsgaard
 *   - Slovak keyboard layout by Daniel Lara (www.learningslovak.com)
 *   - Belarusian and Serbian Cyrillic keyboard layouts by Evgeniy Titov
 *   - Bulgarian Phonetic keyboard layout by Samuil Gospodinov
 *   - Swedish keyboard layout by HÃ¥kan Sandberg
 *   - Romanian keyboard layout by Aurel
 *   - Farsi (Persian) keyboard layout by Kaveh Bakhtiyari (www.bakhtiyari.com)
 *   - Burmese keyboard layout by Cetanapa
 *   - Bosnian/Croatian/Serbian Latin/Slovenian keyboard layout by Miran Zeljko
 *   - Hungarian keyboard layout by Antal Sall 'Hiromacu'
 *   - Arabic keyboard layout by Srinivas Reddy
 *   - Italian and Spanish (Spain) keyboard layouts by dictionarist.com
 *   - Lithuanian and Russian keyboard layouts by Ramunas
 *   - German keyboard layout by QuHno
 *   - French keyboard layout by Hidden Evil
 *   - Polish Programmers layout by moose
 *   - Turkish keyboard layouts by offcu
 *   - Dutch and US Int'l keyboard layouts by jerone
 *
 */
import { InjectionToken } from '@angular/core';
import { KeyboardClassKey } from '../enums/keyboard-class-key.enum';
const MAT_KEYBOARD_LAYOUTS = new InjectionToken('keyboard-layouts.config');
const keyboardLayouts = {
    '\u0627\u0644\u0639\u0631\u0628\u064a\u0629': {
        'name': 'Arabic',
        'keys': [
            [
                ['\u0630', '\u0651 '],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u064e'],
                ['\u0635', '\u064b'],
                ['\u062b', '\u064f'],
                ['\u0642', '\u064c'],
                ['\u0641', '\u0644'],
                ['\u063a', '\u0625'],
                ['\u0639', '\u2018'],
                ['\u0647', '\u00f7'],
                ['\u062e', '\u00d7'],
                ['\u062d', '\u061b'],
                ['\u062c', '<'],
                ['\u062f', '>'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0650'],
                ['\u0633', '\u064d'],
                ['\u064a', ']'],
                ['\u0628', '['],
                ['\u0644', '\u0644'],
                ['\u0627', '\u0623'],
                ['\u062a', '\u0640'],
                ['\u0646', '\u060c'],
                ['\u0645', '/'],
                ['\u0643', ':'],
                ['\u0637', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0626', '~'],
                ['\u0621', '\u0652'],
                ['\u0624', '}'],
                ['\u0631', '{'],
                ['\u0644', '\u0644'],
                ['\u0649', '\u0622'],
                ['\u0629', '\u2019'],
                ['\u0648', ','],
                ['\u0632', '.'],
                ['\u0638', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ar']
    },
    '\u0985\u09b8\u09ae\u09c0\u09df\u09be': {
        'name': 'Assamese',
        'keys': [
            [
                ['+', '?'],
                ['\u09E7', '{', '\u09E7'],
                ['\u09E8', '}', '\u09E8'],
                ['\u09E9', '\u09CD\u09F0', '\u09E9'],
                ['\u09EA', '\u09F0\u09CD', '\u09EA'],
                ['\u09EB', '\u099C\u09CD\u09F0', '\u09EB'],
                ['\u09EC', '\u0995\u09CD\u09B7', '\u09EC'],
                ['\u09ED', '\u0995\u09CD\u09F0', '\u09ED'],
                ['\u09EE', '\u09B6\u09CD\u09F0', '\u09EE'],
                ['\u09EF', '(', '\u09EF'],
                ['\u09E6', ')', '\u09E6'],
                ['-', ''],
                ['\u09C3', '\u098B', '\u09E2', '\u09E0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u09CC', '\u0994', '\u09D7'],
                ['\u09C8', '\u0990'],
                ['\u09BE', '\u0986'],
                ['\u09C0', '\u0988', '\u09E3', '\u09E1'],
                ['\u09C2', '\u098A'],
                ['\u09F1', '\u09AD'],
                ['\u09B9', '\u0999'],
                ['\u0997', '\u0998'],
                ['\u09A6', '\u09A7'],
                ['\u099C', '\u099D'],
                ['\u09A1', '\u09A2', '\u09DC', '\u09DD'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u09CB', '\u0993', '\u09F4', '\u09F5'],
                ['\u09C7', '\u098F', '\u09F6', '\u09F7'],
                ['\u09CD', '\u0985', '\u09F8', '\u09F9'],
                ['\u09BF', '\u0987', '\u09E2', '\u098C'],
                ['\u09C1', '\u0989'],
                ['\u09AA', '\u09AB'],
                ['\u09F0', '', '\u09F0', '\u09F1'],
                ['\u0995', '\u0996'],
                ['\u09A4', '\u09A5'],
                ['\u099A', '\u099B'],
                ['\u099F', '\u09A0'],
                ['\u09BC', '\u099E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u09CE', '\u0983'],
                ['\u0982', '\u0981', '\u09FA'],
                ['\u09AE', '\u09A3'],
                ['\u09A8', '\u09F7'],
                ['\u09AC', '"'],
                ['\u09B2', '\''],
                ['\u09B8', '\u09B6'],
                [',', '\u09B7'],
                ['.', ';'],
                ['\u09AF', '\u09DF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['as']
    },
    '\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d\u04b9\u0430': {
        'name': 'Azerbaijani Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0458', '\u0408'],
                ['\u04AF', '\u04AE'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04BB', '\u04BA'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u04B9', '\u04B8'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u049D', '\u049C'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u04D9', '\u04D8'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u0493', '\u0492'],
                ['\u0431', '\u0411'],
                ['\u04E9', '\u04E8'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['az-CYRL']
    },
    'Az\u0259rbaycanca': {
        'name': 'Azerbaijani Latin',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2166'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['\u00FC', '\u00DC'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', '\u0130'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00F6', '\u00D6'],
                ['\u011F', '\u011E'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u0131', 'I'],
                ['\u0259', '\u018F'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                ['\u00E7', '\u00C7'],
                ['\u015F', '\u015E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['az']
    },
    '\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f': {
        'name': 'Belarusian',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043a', '\u041a'],
                ['\u0435', '\u0415'],
                ['\u043d', '\u041d'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u045e', '\u040e'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\'', '\''],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044b', '\u042b'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043f', '\u041f'],
                ['\u0440', '\u0420'],
                ['\u043e', '\u041e'],
                ['\u043b', '\u041b'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044d', '\u042d'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['/', '|'],
                ['\u044f', '\u042f'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043c', '\u041c'],
                ['\u0456', '\u0406'],
                ['\u0442', '\u0422'],
                ['\u044c', '\u042c'],
                ['\u0431', '\u0411'],
                ['\u044e', '\u042e'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['be']
    },
    'Belgische / Belge': {
        'name': 'Belgian',
        'keys': [
            [
                ['\u00b2', '\u00b3'],
                ['&', '1', '|'],
                ['\u00e9', '2', '@'],
                ['"', '3', '#'],
                ['\'', '4'],
                ['(', '5'],
                ['\u00a7', '6', '^'],
                ['\u00e8', '7'],
                ['!', '8'],
                ['\u00e7', '9', '{'],
                ['\u00e0', '0', '}'],
                [')', '\u00b0'],
                ['-', '_'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['a', 'A'],
                ['z', 'Z'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['^', '\u00a8', '['],
                ['$', '*', ']'],
                ['\u03bc', '\u00a3', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['q', 'Q'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['m', 'M'],
                ['\u00f9', '%', '\u00b4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['w', 'W'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                [',', '?'],
                [';', '.'],
                [':', '/'],
                ['=', '+', '~'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['nl-BE', 'fr-BE']
    },
    '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0424\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u043d': {
        'name': 'Bulgarian Phonetic',
        'keys': [
            [
                ['\u0447', '\u0427'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u044F', '\u042F'],
                ['\u0432', '\u0412'],
                ['\u0435', '\u0415'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u044A', '\u042A'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043E', '\u041E'],
                ['\u043F', '\u041F'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u044E', '\u042E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424'],
                ['\u0433', '\u0413'],
                ['\u0445', '\u0425'],
                ['\u0439', '\u0419'],
                ['\u043A', '\u041A'],
                ['\u043B', '\u041B'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0437', '\u0417'],
                ['\u044C', '\u042C'],
                ['\u0446', '\u0426'],
                ['\u0436', '\u0416'],
                ['\u0431', '\u0411'],
                ['\u043D', '\u041D'],
                ['\u043C', '\u041C'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['bg']
    },
    '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438': {
        'name': 'Bulgarian BDS',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '?'],
                ['3', '+'],
                ['4', '"'],
                ['5', '%'],
                ['6', '='],
                ['7', ':'],
                ['8', '/'],
                ['9', '_'],
                ['0', '\u2116'],
                ['-', '\u0406'],
                ['=', 'V'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                [',', '\u044b'],
                ['\u0443', '\u0423'],
                ['\u0435', '\u0415'],
                ['\u0438', '\u0418'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u043a', '\u041a'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0437', '\u0417'],
                ['\u0446', '\u0426'],
                [';', '\u00a7'],
                ['(', ')']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u044c', '\u042c'],
                ['\u044f', '\u042f'],
                ['\u0430', '\u0410'],
                ['\u043e', '\u041e'],
                ['\u0436', '\u0416'],
                ['\u0433', '\u0413'],
                ['\u0442', '\u0422'],
                ['\u043d', '\u041d'],
                ['\u0412', '\u0412'],
                ['\u043c', '\u041c'],
                ['\u0447', '\u0427'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u042e', '\u044e'],
                ['\u0439', '\u0419'],
                ['\u044a', '\u042a'],
                ['\u044d', '\u042d'],
                ['\u0444', '\u0424'],
                ['\u0445', '\u0425'],
                ['\u043f', '\u041f'],
                ['\u0440', '\u0420'],
                ['\u043b', '\u041b'],
                ['\u0431', '\u0411'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u09ac\u09be\u0982\u09b2\u09be': {
        'name': 'Bengali',
        'keys': [
            [
                [''],
                ['1', '', '\u09E7'],
                ['2', '', '\u09E8'],
                ['3', '\u09CD\u09B0', '\u09E9'],
                ['4', '\u09B0\u09CD', '\u09EA'],
                ['5', '\u099C\u09CD\u09B0', '\u09EB'],
                ['6', '\u09A4\u09CD\u09B7', '\u09EC'],
                ['7', '\u0995\u09CD\u09B0', '\u09ED'],
                ['8', '\u09B6\u09CD\u09B0', '\u09EE'],
                ['9', '(', '\u09EF'],
                ['0', ')', '\u09E6'],
                ['-', '\u0983'],
                ['\u09C3', '\u098B', '\u09E2', '\u09E0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u09CC', '\u0994', '\u09D7'],
                ['\u09C8', '\u0990'],
                ['\u09BE', '\u0986'],
                ['\u09C0', '\u0988', '\u09E3', '\u09E1'],
                ['\u09C2', '\u098A'],
                ['\u09AC', '\u09AD'],
                ['\u09B9', '\u0999'],
                ['\u0997', '\u0998'],
                ['\u09A6', '\u09A7'],
                ['\u099C', '\u099D'],
                ['\u09A1', '\u09A2', '\u09DC', '\u09DD'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u09CB', '\u0993', '\u09F4', '\u09F5'],
                ['\u09C7', '\u098F', '\u09F6', '\u09F7'],
                ['\u09CD', '\u0985', '\u09F8', '\u09F9'],
                ['\u09BF', '\u0987', '\u09E2', '\u098C'],
                ['\u09C1', '\u0989'],
                ['\u09AA', '\u09AB'],
                ['\u09B0', '', '\u09F0', '\u09F1'],
                ['\u0995', '\u0996'],
                ['\u09A4', '\u09A5'],
                ['\u099A', '\u099B'],
                ['\u099F', '\u09A0'],
                ['\u09BC', '\u099E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0982', '\u0981', '\u09FA'],
                ['\u09AE', '\u09A3'],
                ['\u09A8'],
                ['\u09AC'],
                ['\u09B2'],
                ['\u09B8', '\u09B6'],
                [',', '\u09B7'],
                ['.', '{'],
                ['\u09AF', '\u09DF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['bn']
    },
    'Bosanski': {
        'name': 'Bosnian',
        'keys': [
            [
                ['\u00B8', '\u00A8'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '&', '\u02DB'],
                ['7', '/', '`'],
                ['8', '(', '\u02D9'],
                ['9', ')', '\u00B4'],
                ['0', '=', '\u02DD'],
                ['\'', '?', '\u00A8'],
                ['+', '*', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u0161', '\u0160', '\u00F7'],
                ['\u0111', '\u0110', '\u00D7'],
                ['\u017E', '\u017D', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u010D', '\u010C'],
                ['\u0107', '\u0106', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_', '\u00A9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['bs']
    },
    'Canadienne-fran\u00e7aise': {
        'name': 'Canadian French',
        'keys': [
            [
                ['#', '|', '\\'],
                ['1', '!', '\u00B1'],
                ['2', '"', '@'],
                ['3', '/', '\u00A3'],
                ['4', '$', '\u00A2'],
                ['5', '%', '\u00A4'],
                ['6', '?', '\u00AC'],
                ['7', '&', '\u00A6'],
                ['8', '*', '\u00B2'],
                ['9', '(', '\u00B3'],
                ['0', ')', '\u00BC'],
                ['-', '_', '\u00BD'],
                ['=', '+', '\u00BE'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O', '\u00A7'],
                ['p', 'P', '\u00B6'],
                ['^', '^', '['],
                ['\u00B8', '\u00A8', ']'],
                ['<', '>', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':', '~'],
                ['`', '`', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u00AB', '\u00BB', '\u00B0'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', '\'', '\u00AF'],
                ['.', '.', '\u00AD'],
                ['\u00E9', '\u00C9', '\u00B4'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr-CA']
    },
    '\u010cesky': {
        'name': 'Czech',
        'keys': [
            [
                [';', '\u00b0', '`', '~'],
                ['+', '1', '!'],
                ['\u011B', '2', '@'],
                ['\u0161', '3', '#'],
                ['\u010D', '4', '$'],
                ['\u0159', '5', '%'],
                ['\u017E', '6', '^'],
                ['\u00FD', '7', '&'],
                ['\u00E1', '8', '*'],
                ['\u00ED', '9', '('],
                ['\u00E9', '0', ')'],
                ['=', '%', '-', '_'],
                ['\u00B4', '\u02c7', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FA', '/', '[', '{'],
                [')', '(', ']', '}'],
                ['\u00A8', '\'', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u016F', '"', ';', ':'],
                ['\u00A7', '!', '\u00a4', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|', '', '\u02dd'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '?', '<', '\u00d7'],
                ['.', ':', '>', '\u00f7'],
                ['-', '_', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['cs']
    },
    'Dansk': {
        'name': 'Danish',
        'keys': [
            [
                ['\u00bd', '\u00a7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%', '\u20ac'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\u00b4', '`', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e6', '\u00c6'],
                ['\u00f8', '\u00d8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['da']
    },
    'Deutsch': {
        'name': 'German',
        'keys': [
            [
                ['^', '\u00b0'],
                ['1', '!'],
                ['2', '"', '\u00b2'],
                ['3', '\u00a7', '\u00b3'],
                ['4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\u00df', '?', '\\'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00fc', '\u00dc'],
                ['+', '*', '~'],
                ['#', '\'']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f6', '\u00d6'],
                ['\u00e4', '\u00c4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\u00a6'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00b5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['de']
    },
    'Dingbats': {
        'name': 'Dingbats',
        'keys': [
            [
                ['\u2764', '\u2765', '\u2766', '\u2767'],
                ['\u278a', '\u2780', '\u2776', '\u2768'],
                ['\u278b', '\u2781', '\u2777', '\u2769'],
                ['\u278c', '\u2782', '\u2778', '\u276a'],
                ['\u278d', '\u2783', '\u2779', '\u276b'],
                ['\u278e', '\u2784', '\u277a', '\u276c'],
                ['\u278f', '\u2785', '\u277b', '\u276d'],
                ['\u2790', '\u2786', '\u277c', '\u276e'],
                ['\u2791', '\u2787', '\u277d', '\u276f'],
                ['\u2792', '\u2788', '\u277e', '\u2770'],
                ['\u2793', '\u2789', '\u277f', '\u2771'],
                ['\u2795', '\u2796', '\u274c', '\u2797'],
                ['\u2702', '\u2704', '\u2701', '\u2703'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u2714', '\u2705', '\u2713'],
                ['\u2718', '\u2715', '\u2717', '\u2716'],
                ['\u271a', '\u2719', '\u271b', '\u271c'],
                ['\u271d', '\u271e', '\u271f', '\u2720'],
                ['\u2722', '\u2723', '\u2724', '\u2725'],
                ['\u2726', '\u2727', '\u2728', '\u2756'],
                ['\u2729', '\u272a', '\u272d', '\u2730'],
                ['\u272c', '\u272b', '\u272e', '\u272f'],
                ['\u2736', '\u2731', '\u2732', '\u2749'],
                ['\u273b', '\u273c', '\u273d', '\u273e'],
                ['\u2744', '\u2745', '\u2746', '\u2743'],
                ['\u2733', '\u2734', '\u2735', '\u2721'],
                ['\u2737', '\u2738', '\u2739', '\u273a']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u2799', '\u279a', '\u2798', '\u2758'],
                ['\u27b5', '\u27b6', '\u27b4', '\u2759'],
                ['\u27b8', '\u27b9', '\u27b7', '\u275a'],
                ['\u2794', '\u279c', '\u27ba', '\u27bb'],
                ['\u279d', '\u279e', '\u27a1', '\u2772'],
                ['\u27a9', '\u27aa', '\u27ab', '\u27ac'],
                ['\u27a4', '\u27a3', '\u27a2', '\u279b'],
                ['\u27b3', '\u27bc', '\u27bd', '\u2773'],
                ['\u27ad', '\u27ae', '\u27af', '\u27b1'],
                ['\u27a8', '\u27a6', '\u27a5', '\u27a7'],
                ['\u279f', '\u27a0', '\u27be', '\u27b2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u270c', '\u270b', '\u270a', '\u270d'],
                ['\u274f', '\u2750', '\u2751', '\u2752'],
                ['\u273f', '\u2740', '\u2741', '\u2742'],
                ['\u2747', '\u2748', '\u274a', '\u274b'],
                ['\u2757', '\u2755', '\u2762', '\u2763'],
                ['\u2753', '\u2754', '\u27b0', '\u27bf'],
                ['\u270f', '\u2710', '\u270e', '\u2774'],
                ['\u2712', '\u2711', '\u274d', '\u274e'],
                ['\u2709', '\u2706', '\u2708', '\u2707'],
                ['\u275b', '\u275d', '\u2761', '\u2775'],
                ['\u275c', '\u275e', '\u275f', '\u2760'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    '\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0': {
        'name': 'Divehi',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u07ab', '\u00d7'],
                ['\u07ae', '\u2019'],
                ['\u07a7', '\u201c'],
                ['\u07a9', '/'],
                ['\u07ad', ':'],
                ['\u078e', '\u07a4'],
                ['\u0783', '\u079c'],
                ['\u0789', '\u07a3'],
                ['\u078c', '\u07a0'],
                ['\u0780', '\u0799'],
                ['\u078d', '\u00f7'],
                ['[', '{'],
                [']', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u07a8', '<'],
                ['\u07aa', '>'],
                ['\u07b0', '.', ',', ','],
                ['\u07a6', '\u060c'],
                ['\u07ac', '"'],
                ['\u0788', '\u07a5'],
                ['\u0787', '\u07a2'],
                ['\u0782', '\u0798'],
                ['\u0786', '\u079a'],
                ['\u078a', '\u07a1'],
                ['\ufdf2', '\u061b', ';', ';'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u0792', '\u0796'],
                ['\u0791', '\u0795'],
                ['\u0790', '\u078f'],
                ['\u0794', '\u0797', '\u200D'],
                ['\u0785', '\u079f', '\u200C'],
                ['\u078b', '\u079b', '\u200E'],
                ['\u0784', '\u079D', '\u200F'],
                ['\u0781', '\\'],
                ['\u0793', '\u079e'],
                ['\u07af', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['dv']
    },
    'Dvorak': {
        'name': 'Dvorak',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['[', '{'],
                [']', '}'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\'', '"'],
                [',', '<'],
                ['.', '>'],
                ['p', 'P'],
                ['y', 'Y'],
                ['f', 'F'],
                ['g', 'G'],
                ['c', 'C'],
                ['r', 'R'],
                ['l', 'L'],
                ['/', '?'],
                ['=', '+'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['o', 'O'],
                ['e', 'E'],
                ['u', 'U'],
                ['i', 'I'],
                ['d', 'D'],
                ['h', 'H'],
                ['t', 'T'],
                ['n', 'N'],
                ['s', 'S'],
                ['-', '_'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [';', ':'],
                ['q', 'Q'],
                ['j', 'J'],
                ['k', 'K'],
                ['x', 'X'],
                ['b', 'B'],
                ['m', 'M'],
                ['w', 'W'],
                ['v', 'V'],
                ['z', 'Z'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac': {
        'name': 'Greek',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a3'],
                ['5', '%', '\u00a7'],
                ['6', '^', '\u00b6'],
                ['7', '&'],
                ['8', '*', '\u00a4'],
                ['9', '(', '\u00a6'],
                ['0', ')', '\u00ba'],
                ['-', '_', '\u00b1'],
                ['=', '+', '\u00bd'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                [';', ':'],
                ['\u03c2', '^'],
                ['\u03b5', '\u0395'],
                ['\u03c1', '\u03a1'],
                ['\u03c4', '\u03a4'],
                ['\u03c5', '\u03a5'],
                ['\u03b8', '\u0398'],
                ['\u03b9', '\u0399'],
                ['\u03bf', '\u039f'],
                ['\u03c0', '\u03a0'],
                ['[', '{', '\u201c'],
                [']', '}', '\u201d'],
                ['\\', '|', '\u00ac']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u03b1', '\u0391'],
                ['\u03c3', '\u03a3'],
                ['\u03b4', '\u0394'],
                ['\u03c6', '\u03a6'],
                ['\u03b3', '\u0393'],
                ['\u03b7', '\u0397'],
                ['\u03be', '\u039e'],
                ['\u03ba', '\u039a'],
                ['\u03bb', '\u039b'],
                ['\u0384', '\u00a8', '\u0385'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['\u03b6', '\u0396'],
                ['\u03c7', '\u03a7'],
                ['\u03c8', '\u03a8'],
                ['\u03c9', '\u03a9'],
                ['\u03b2', '\u0392'],
                ['\u03bd', '\u039d'],
                ['\u03bc', '\u039c'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['el']
    },
    'Eesti': {
        'name': 'Estonian',
        'keys': [
            [
                ['\u02C7', '~'],
                ['1', '!'],
                ['2', '"', '@', '@'],
                ['3', '#', '\u00A3', '\u00A3'],
                ['4', '\u00A4', '$', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{', '{'],
                ['8', '(', '[', '['],
                ['9', ')', ']', ']'],
                ['0', '=', '}', '}'],
                ['+', '?', '\\', '\\'],
                ['\u00B4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FC', '\u00DC'],
                ['\u00F5', '\u00D5', '\u00A7', '\u00A7'],
                ['\'', '*', '\u00BD', '\u00BD']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0161', '\u0160'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00F6', '\u00D6'],
                ['\u00E4', '\u00C4', '^', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|', '|'],
                ['z', 'Z', '\u017E', '\u017D'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['et']
    },
    'Espa\u00f1ol': {
        'name': 'Spanish',
        'keys': [
            [
                ['\u00ba', '\u00aa', '\\'],
                ['1', '!', '|'],
                ['2', '"', '@'],
                ['3', '\'', '#'],
                ['4', '$', '~'],
                ['5', '%', '\u20ac'],
                ['6', '&', '\u00ac'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['\u00a1', '\u00bf'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['`', '^', '['],
                ['+', '*', ']'],
                ['\u00e7', '\u00c7', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f1', '\u00d1'],
                ['\u00b4', '\u00a8', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['es']
    },
    '\u062f\u0631\u06cc': {
        'name': 'Dari',
        'keys': [
            [
                ['\u200D', '\u00F7', '~'],
                ['\u06F1', '!', '`'],
                ['\u06F2', '\u066C', '@'],
                ['\u06F3', '\u066B', '#'],
                ['\u06F4', '\u060B', '$'],
                ['\u06F5', '\u066A', '%'],
                ['\u06F6', '\u00D7', '^'],
                ['\u06F7', '\u060C', '&'],
                ['\u06F8', '*', '\u2022'],
                ['\u06F9', ')', '\u200E'],
                ['\u06F0', '(', '\u200F'],
                ['-', '\u0640', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u0652', '\u00B0'],
                ['\u0635', '\u064C'],
                ['\u062B', '\u064D', '\u20AC'],
                ['\u0642', '\u064B', '\uFD3E'],
                ['\u0641', '\u064F', '\uFD3F'],
                ['\u063A', '\u0650', '\u0656'],
                ['\u0639', '\u064E', '\u0659'],
                ['\u0647', '\u0651', '\u0655'],
                ['\u062E', ']', '\''],
                ['\u062D', '[', '"'],
                ['\u062C', '}', '\u0681'],
                ['\u0686', '{', '\u0685'],
                ['\\', '|', '?']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0624', '\u069A'],
                ['\u0633', '\u0626', '\u06CD'],
                ['\u06CC', '\u064A', '\u0649'],
                ['\u0628', '\u0625', '\u06D0'],
                ['\u0644', '\u0623', '\u06B7'],
                ['\u0627', '\u0622', '\u0671'],
                ['\u062A', '\u0629', '\u067C'],
                ['\u0646', '\u00BB', '\u06BC'],
                ['\u0645', '\u00AB', '\u06BA'],
                ['\u06A9', ':', ';'],
                ['\u06AF', '\u061B', '\u06AB'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '\u0643', '\u06D2'],
                ['\u0637', '\u0653', '\u0691'],
                ['\u0632', '\u0698', '\u0696'],
                ['\u0631', '\u0670', '\u0693'],
                ['\u0630', '\u200C', '\u0688'],
                ['\u062F', '\u0654', '\u0689'],
                ['\u067E', '\u0621', '\u0679'],
                ['\u0648', '>', ','],
                ['.', '<', '\u06C7'],
                ['/', '\u061F', '\u06C9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fa-AF']
    },
    '\u0641\u0627\u0631\u0633\u06cc': {
        'name': 'Farsi',
        'keys': [
            [
                ['\u067e', '\u0651 '],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u064e'],
                ['\u0635', '\u064b'],
                ['\u062b', '\u064f'],
                ['\u0642', '\u064c'],
                ['\u0641', '\u0644'],
                ['\u063a', '\u0625'],
                ['\u0639', '\u2018'],
                ['\u0647', '\u00f7'],
                ['\u062e', '\u00d7'],
                ['\u062d', '\u061b'],
                ['\u062c', '<'],
                ['\u0686', '>'],
                ['\u0698', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0650'],
                ['\u0633', '\u064d'],
                ['\u064a', ']'],
                ['\u0628', '['],
                ['\u0644', '\u0644'],
                ['\u0627', '\u0623'],
                ['\u062a', '\u0640'],
                ['\u0646', '\u060c'],
                ['\u0645', '\\'],
                ['\u06af', ':'],
                ['\u0643', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '~'],
                ['\u0637', '\u0652'],
                ['\u0632', '}'],
                ['\u0631', '{'],
                ['\u0630', '\u0644'],
                ['\u062f', '\u0622'],
                ['\u0626', '\u0621'],
                ['\u0648', ','],
                ['.', '.'],
                ['/', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['fa']
    },
    'F\u00f8royskt': {
        'name': 'Faeroese',
        'keys': [
            [
                ['\u00BD', '\u00A7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00A3'],
                ['4', '\u00A4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\u00B4', '`', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E5', '\u00C5', '\u00A8'],
                ['\u00F0', '\u00D0', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E6', '\u00C6'],
                ['\u00F8', '\u00D8', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fo']
    },
    'Fran\u00e7ais': {
        'name': 'French',
        'keys': [
            [
                ['\u00b2', '\u00b3'],
                ['&', '1'],
                ['\u00e9', '2', '~'],
                ['"', '3', '#'],
                ['\'', '4', '{'],
                ['(', '5', '['],
                ['-', '6', '|'],
                ['\u00e8', '7', '`'],
                ['_', '8', '\\'],
                ['\u00e7', '9', '^'],
                ['\u00e0', '0', '@'],
                [')', '\u00b0', ']'],
                ['=', '+', '}'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['a', 'A'],
                ['z', 'Z'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['^', '\u00a8'],
                ['$', '\u00a3', '\u00a4'],
                ['*', '\u03bc']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['q', 'Q'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['m', 'M'],
                ['\u00f9', '%'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['w', 'W'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                [',', '?'],
                [';', '.'],
                [':', '/'],
                ['!', '\u00a7'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr']
    },
    'Gaeilge': {
        'name': 'Irish / Gaelic',
        'keys': [
            [
                ['`', '\u00AC', '\u00A6', '\u00A6'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00A3'],
                ['4', '$', '\u20AC'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00E9', '\u00C9'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y', '\u00FD', '\u00DD'],
                ['u', 'U', '\u00FA', '\u00DA'],
                ['i', 'I', '\u00ED', '\u00CD'],
                ['o', 'O', '\u00F3', '\u00D3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['#', '~']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E1', '\u00C1'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@', '\u00B4', '`'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ga', 'gd']
    },
    '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0': {
        'name': 'Gujarati',
        'keys': [
            [
                [''],
                ['1', '\u0A8D', '\u0AE7'],
                ['2', '\u0AC5', '\u0AE8'],
                ['3', '\u0ACD\u0AB0', '\u0AE9'],
                ['4', '\u0AB0\u0ACD', '\u0AEA'],
                ['5', '\u0A9C\u0ACD\u0A9E', '\u0AEB'],
                ['6', '\u0AA4\u0ACD\u0AB0', '\u0AEC'],
                ['7', '\u0A95\u0ACD\u0AB7', '\u0AED'],
                ['8', '\u0AB6\u0ACD\u0AB0', '\u0AEE'],
                ['9', '(', '\u0AEF'],
                ['0', ')', '\u0AE6'],
                ['-', '\u0A83'],
                ['\u0AC3', '\u0A8B', '\u0AC4', '\u0AE0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0ACC', '\u0A94'],
                ['\u0AC8', '\u0A90'],
                ['\u0ABE', '\u0A86'],
                ['\u0AC0', '\u0A88'],
                ['\u0AC2', '\u0A8A'],
                ['\u0AAC', '\u0AAD'],
                ['\u0AB9', '\u0A99'],
                ['\u0A97', '\u0A98'],
                ['\u0AA6', '\u0AA7'],
                ['\u0A9C', '\u0A9D'],
                ['\u0AA1', '\u0AA2'],
                ['\u0ABC', '\u0A9E'],
                ['\u0AC9', '\u0A91']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0ACB', '\u0A93'],
                ['\u0AC7', '\u0A8F'],
                ['\u0ACD', '\u0A85'],
                ['\u0ABF', '\u0A87'],
                ['\u0AC1', '\u0A89'],
                ['\u0AAA', '\u0AAB'],
                ['\u0AB0'],
                ['\u0A95', '\u0A96'],
                ['\u0AA4', '\u0AA5'],
                ['\u0A9A', '\u0A9B'],
                ['\u0A9F', '\u0AA0'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0A82', '\u0A81', '', '\u0AD0'],
                ['\u0AAE', '\u0AA3'],
                ['\u0AA8'],
                ['\u0AB5'],
                ['\u0AB2', '\u0AB3'],
                ['\u0AB8', '\u0AB6'],
                [',', '\u0AB7'],
                ['.', '\u0964', '\u0965', '\u0ABD'],
                ['\u0AAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['gu']
    },
    '\u05e2\u05d1\u05e8\u05d9\u05ea': {
        'name': 'Hebrew',
        'keys': [
            [
                ['~', '`'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$', '\u20aa'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', 'Q'],
                ['\'', 'W'],
                ['\u05e7', 'E', '\u20ac'],
                ['\u05e8', 'R'],
                ['\u05d0', 'T'],
                ['\u05d8', 'Y'],
                ['\u05d5', 'U', '\u05f0'],
                ['\u05df', 'I'],
                ['\u05dd', 'O'],
                ['\u05e4', 'P'],
                ['\\', '|'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05e9', 'A'],
                ['\u05d3', 'S'],
                ['\u05d2', 'D'],
                ['\u05db', 'F'],
                ['\u05e2', 'G'],
                ['\u05d9', 'H', '\u05f2'],
                ['\u05d7', 'J', '\u05f1'],
                ['\u05dc', 'K'],
                ['\u05da', 'L'],
                ['\u05e3', ':'],
                [',', '"'],
                [']', '}'],
                ['[', '{']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05d6', 'Z'],
                ['\u05e1', 'X'],
                ['\u05d1', 'C'],
                ['\u05d4', 'V'],
                ['\u05e0', 'B'],
                ['\u05de', 'N'],
                ['\u05e6', 'M'],
                ['\u05ea', '>'],
                ['\u05e5', '<'],
                ['.', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['he']
    },
    '\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940': {
        'name': 'Devanagari',
        'keys': [
            [
                ['\u094A', '\u0912'],
                ['1', '\u090D', '\u0967'],
                ['2', '\u0945', '\u0968'],
                ['3', '\u094D\u0930', '\u0969'],
                ['4', '\u0930\u094D', '\u096A'],
                ['5', '\u091C\u094D\u091E', '\u096B'],
                ['6', '\u0924\u094D\u0930', '\u096C'],
                ['7', '\u0915\u094D\u0937', '\u096D'],
                ['8', '\u0936\u094D\u0930', '\u096E'],
                ['9', '(', '\u096F'],
                ['0', ')', '\u0966'],
                ['-', '\u0903'],
                ['\u0943', '\u090B', '\u0944', '\u0960'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908', '\u0963', '\u0961'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918', '\u095A'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D', '\u095B'],
                ['\u0921', '\u0922', '\u095C', '\u095D'],
                ['\u093C', '\u091E'],
                ['\u0949', '\u0911']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907', '\u0962', '\u090C'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B', '', '\u095E'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916', '\u0958', '\u0959'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', '\u0952'],
                ['\u091F', '\u0920', '', '\u0951'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0946', '\u090E', '\u0953'],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923', '\u0954'],
                ['\u0928', '\u0929'],
                ['\u0935', '\u0934'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', '\u0970'],
                ['.', '\u0964', '\u0965', '\u093D'],
                ['\u092F', '\u095F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hi-DEVA']
    },
    '\u0939\u093f\u0902\u0926\u0940': {
        'name': 'Hindi',
        'keys': [
            [
                ['\u200d', '\u200c', '`', '~'],
                ['1', '\u090D', '\u0967', '!'],
                ['2', '\u0945', '\u0968', '@'],
                ['3', '\u094D\u0930', '\u0969', '#'],
                ['4', '\u0930\u094D', '\u096A', '$'],
                ['5', '\u091C\u094D\u091E', '\u096B', '%'],
                ['6', '\u0924\u094D\u0930', '\u096C', '^'],
                ['7', '\u0915\u094D\u0937', '\u096D', '&'],
                ['8', '\u0936\u094D\u0930', '\u096E', '*'],
                ['9', '(', '\u096F', '('],
                ['0', ')', '\u0966', ')'],
                ['-', '\u0903', '-', '_'],
                ['\u0943', '\u090B', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D'],
                ['\u0921', '\u0922', '[', '{'],
                ['\u093C', '\u091E', ']', '}'],
                ['\u0949', '\u0911', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', ';', ':'],
                ['\u091F', '\u0920', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923'],
                ['\u0928'],
                ['\u0935'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', ',', '<'],
                ['.', '\u0964', '.', '>'],
                ['\u092F', '\u095F', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hi']
    },
    '\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0574\u0578\u0582\u057f\u0584': {
        'name': 'Western Armenian',
        'keys': [
            [
                ['\u055D', '\u055C'],
                [':', '1'],
                ['\u0571', '\u0541'],
                ['\u0575', '\u0545'],
                ['\u055B', '3'],
                [',', '4'],
                ['-', '9'],
                ['.', '\u0587'],
                ['\u00AB', '('],
                ['\u00BB', ')'],
                ['\u0585', '\u0555'],
                ['\u057C', '\u054C'],
                ['\u056A', '\u053A'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u056D', '\u053D'],
                ['\u057E', '\u054E'],
                ['\u0567', '\u0537'],
                ['\u0580', '\u0550'],
                ['\u0564', '\u0534'],
                ['\u0565', '\u0535'],
                ['\u0568', '\u0538'],
                ['\u056B', '\u053B'],
                ['\u0578', '\u0548'],
                ['\u0562', '\u0532'],
                ['\u0579', '\u0549'],
                ['\u057B', '\u054B'],
                ['\'', '\u055E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0561', '\u0531'],
                ['\u057D', '\u054D'],
                ['\u057F', '\u054F'],
                ['\u0586', '\u0556'],
                ['\u056F', '\u053F'],
                ['\u0570', '\u0540'],
                ['\u0573', '\u0543'],
                ['\u0584', '\u0554'],
                ['\u056C', '\u053C'],
                ['\u0569', '\u0539'],
                ['\u0583', '\u0553'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0566', '\u0536'],
                ['\u0581', '\u0551'],
                ['\u0563', '\u0533'],
                ['\u0582', '\u0552'],
                ['\u057A', '\u054A'],
                ['\u0576', '\u0546'],
                ['\u0574', '\u0544'],
                ['\u0577', '\u0547'],
                ['\u0572', '\u0542'],
                ['\u056E', '\u053E'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['hy-AREVMATA']
    },
    '\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0565\u056c\u0584': {
        'name': 'Eastern Armenian',
        'keys': [
            [
                ['\u055D', '\u055C'],
                [':', '1'],
                ['\u0571', '\u0541'],
                ['\u0575', '\u0545'],
                ['\u055B', '3'],
                [',', '4'],
                ['-', '9'],
                ['.', '\u0587'],
                ['\u00AB', '('],
                ['\u00BB', ')'],
                ['\u0585', '\u0555'],
                ['\u057C', '\u054C'],
                ['\u056A', '\u053A'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u056D', '\u053D'],
                ['\u0582', '\u0552'],
                ['\u0567', '\u0537'],
                ['\u0580', '\u0550'],
                ['\u057F', '\u054F'],
                ['\u0565', '\u0535'],
                ['\u0568', '\u0538'],
                ['\u056B', '\u053B'],
                ['\u0578', '\u0548'],
                ['\u057A', '\u054A'],
                ['\u0579', '\u0549'],
                ['\u057B', '\u054B'],
                ['\'', '\u055E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0561', '\u0531'],
                ['\u057D', '\u054D'],
                ['\u0564', '\u0534'],
                ['\u0586', '\u0556'],
                ['\u0584', '\u0554'],
                ['\u0570', '\u0540'],
                ['\u0573', '\u0543'],
                ['\u056F', '\u053F'],
                ['\u056C', '\u053C'],
                ['\u0569', '\u0539'],
                ['\u0583', '\u0553'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0566', '\u0536'],
                ['\u0581', '\u0551'],
                ['\u0563', '\u0533'],
                ['\u057E', '\u054E'],
                ['\u0562', '\u0532'],
                ['\u0576', '\u0546'],
                ['\u0574', '\u0544'],
                ['\u0577', '\u0547'],
                ['\u0572', '\u0542'],
                ['\u056E', '\u053E'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['hy']
    },
    '\u00cdslenska': {
        'name': 'Icelandic',
        'keys': [
            [
                ['\u00B0', '\u00A8', '\u00B0'],
                ['1', '!'],
                ['2', '"'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\u00F6', '\u00D6', '\\'],
                ['-', '_'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00F0', '\u00D0'],
                ['\'', '?', '~'],
                ['+', '*', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E6', '\u00C6'],
                ['\u00B4', '\'', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['\u00FE', '\u00DE'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['is']
    },
    'Italiano': {
        'name': 'Italian',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00a3'],
                ['4', '$', '\u20ac'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['\u00ec', '^'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e8', '\u00e9', '[', '{'],
                ['+', '*', ']', '}'],
                ['\u00f9', '\u00a7']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f2', '\u00e7', '@'],
                ['\u00e0', '\u00b0', '#'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['it']
    },
    '\u65e5\u672c\u8a9e': {
        'name': 'Japanese Hiragana/Katakana',
        'keys': [
            [
                ['\uff5e'],
                ['\u306c', '\u30cc'],
                ['\u3075', '\u30d5'],
                ['\u3042', '\u30a2', '\u3041', '\u30a1'],
                ['\u3046', '\u30a6', '\u3045', '\u30a5'],
                ['\u3048', '\u30a8', '\u3047', '\u30a7'],
                ['\u304a', '\u30aa', '\u3049', '\u30a9'],
                ['\u3084', '\u30e4', '\u3083', '\u30e3'],
                ['\u3086', '\u30e6', '\u3085', '\u30e5'],
                ['\u3088', '\u30e8', '\u3087', '\u30e7'],
                ['\u308f', '\u30ef', '\u3092', '\u30f2'],
                ['\u307b', '\u30db', '\u30fc', '\uff1d'],
                ['\u3078', '\u30d8', '\uff3e', '\uff5e'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u305f', '\u30bf'],
                ['\u3066', '\u30c6'],
                ['\u3044', '\u30a4', '\u3043', '\u30a3'],
                ['\u3059', '\u30b9'],
                ['\u304b', '\u30ab'],
                ['\u3093', '\u30f3'],
                ['\u306a', '\u30ca'],
                ['\u306b', '\u30cb'],
                ['\u3089', '\u30e9'],
                ['\u305b', '\u30bb'],
                ['\u3001', '\u3001', '\uff20', '\u2018'],
                ['\u3002', '\u3002', '\u300c', '\uff5b'],
                ['\uffe5', '', '', '\uff0a'],
                ['\u309B', '"', '\uffe5', '\uff5c']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u3061', '\u30c1'],
                ['\u3068', '\u30c8'],
                ['\u3057', '\u30b7'],
                ['\u306f', '\u30cf'],
                ['\u304d', '\u30ad'],
                ['\u304f', '\u30af'],
                ['\u307e', '\u30de'],
                ['\u306e', '\u30ce'],
                ['\u308c', '\u30ec', '\uff1b', '\uff0b'],
                ['\u3051', '\u30b1', '\uff1a', '\u30f6'],
                ['\u3080', '\u30e0', '\u300d', '\uff5d'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u3064', '\u30c4'],
                ['\u3055', '\u30b5'],
                ['\u305d', '\u30bd'],
                ['\u3072', '\u30d2'],
                ['\u3053', '\u30b3'],
                ['\u307f', '\u30df'],
                ['\u3082', '\u30e2'],
                ['\u306d', '\u30cd', '\u3001', '\uff1c'],
                ['\u308b', '\u30eb', '\u3002', '\uff1e'],
                ['\u3081', '\u30e1', '\u30fb', '\uff1f'],
                ['\u308d', '\u30ed', '', '\uff3f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ja']
    },
    '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8': {
        'name': 'Georgian',
        'keys': [
            [
                ['\u201E', '\u201C'],
                ['!', '1'],
                ['?', '2'],
                ['\u2116', '3'],
                ['\u00A7', '4'],
                ['%', '5'],
                [':', '6'],
                ['.', '7'],
                [';', '8'],
                [',', '9'],
                ['/', '0'],
                ['\u2013', '-'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u10E6', '\u10E6'],
                ['\u10EF', '\u10EF'],
                ['\u10E3', '\u10E3'],
                ['\u10D9', '\u10D9'],
                ['\u10D4', '\u10D4', '\u10F1'],
                ['\u10DC', '\u10DC'],
                ['\u10D2', '\u10D2'],
                ['\u10E8', '\u10E8'],
                ['\u10EC', '\u10EC'],
                ['\u10D6', '\u10D6'],
                ['\u10EE', '\u10EE', '\u10F4'],
                ['\u10EA', '\u10EA'],
                ['(', ')']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u10E4', '\u10E4', '\u10F6'],
                ['\u10EB', '\u10EB'],
                ['\u10D5', '\u10D5', '\u10F3'],
                ['\u10D7', '\u10D7'],
                ['\u10D0', '\u10D0'],
                ['\u10DE', '\u10DE'],
                ['\u10E0', '\u10E0'],
                ['\u10DD', '\u10DD'],
                ['\u10DA', '\u10DA'],
                ['\u10D3', '\u10D3'],
                ['\u10DF', '\u10DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u10ED', '\u10ED'],
                ['\u10E9', '\u10E9'],
                ['\u10E7', '\u10E7'],
                ['\u10E1', '\u10E1'],
                ['\u10DB', '\u10DB'],
                ['\u10D8', '\u10D8', '\u10F2'],
                ['\u10E2', '\u10E2'],
                ['\u10E5', '\u10E5'],
                ['\u10D1', '\u10D1'],
                ['\u10F0', '\u10F0', '\u10F5'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ka']
    },
    '\u049a\u0430\u0437\u0430\u049b\u0448\u0430': {
        'name': 'Kazakh',
        'keys': [
            [
                ['(', ')'],
                ['"', '!'],
                ['\u04d9', '\u04d8'],
                ['\u0456', '\u0406'],
                ['\u04a3', '\u04a2'],
                ['\u0493', '\u0492'],
                [',', ';'],
                ['.', ':'],
                ['\u04af', '\u04ae'],
                ['\u04b1', '\u04b0'],
                ['\u049b', '\u049a'],
                ['\u04e9', '\u04e8'],
                ['\u04bb', '\u04ba'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['\u2116', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['kk']
    },
    '\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a': {
        'name': 'Khmer',
        'keys': [
            [
                ['\u00AB', '\u00BB', '\u200D'],
                ['\u17E1', '!', '\u200C', '\u17F1'],
                ['\u17E2', '\u17D7', '@', '\u17F2'],
                ['\u17E3', '"', '\u17D1', '\u17F3'],
                ['\u17E4', '\u17DB', '$', '\u17F4'],
                ['\u17E5', '%', '\u20AC', '\u17F5'],
                ['\u17E6', '\u17CD', '\u17D9', '\u17F6'],
                ['\u17E7', '\u17D0', '\u17DA', '\u17F7'],
                ['\u17E8', '\u17CF', '*', '\u17F8'],
                ['\u17E9', '(', '{', '\u17F9'],
                ['\u17E0', ')', '}', '\u17F0'],
                ['\u17A5', '\u17CC', 'x'],
                ['\u17B2', '=', '\u17CE'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1786', '\u1788', '\u17DC', '\u19E0'],
                ['\u17B9', '\u17BA', '\u17DD', '\u19E1'],
                ['\u17C1', '\u17C2', '\u17AF', '\u19E2'],
                ['\u179A', '\u17AC', '\u17AB', '\u19E3'],
                ['\u178F', '\u1791', '\u17A8', '\u19E4'],
                ['\u1799', '\u17BD', '\u1799\u17BE\u1784', '\u19E5'],
                ['\u17BB', '\u17BC', '', '\u19E6'],
                ['\u17B7', '\u17B8', '\u17A6', '\u19E7'],
                ['\u17C4', '\u17C5', '\u17B1', '\u19E8'],
                ['\u1795', '\u1797', '\u17B0', '\u19E9'],
                ['\u17C0', '\u17BF', '\u17A9', '\u19EA'],
                ['\u17AA', '\u17A7', '\u17B3', '\u19EB'],
                ['\u17AE', '\u17AD', '\\']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u17B6', '\u17B6\u17C6', '\u17B5', '\u19EC'],
                ['\u179F', '\u17C3', '', '\u19ED'],
                ['\u178A', '\u178C', '\u17D3', '\u19EE'],
                ['\u1790', '\u1792', '', '\u19EF'],
                ['\u1784', '\u17A2', '\u17A4', '\u19F0'],
                ['\u17A0', '\u17C7', '\u17A3', '\u19F1'],
                ['\u17D2', '\u1789', '\u17B4', '\u19F2'],
                ['\u1780', '\u1782', '\u179D', '\u19F3'],
                ['\u179B', '\u17A1', '\u17D8', '\u19F4'],
                ['\u17BE', '\u17C4\u17C7', '\u17D6', '\u19F5'],
                ['\u17CB', '\u17C9', '\u17C8', '\u19F6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u178B', '\u178D', '|', '\u19F7'],
                ['\u1781', '\u1783', '\u1781\u17D2\u1789\u17BB\u17C6', '\u19F8'],
                ['\u1785', '\u1787', '-', '\u19F9'],
                ['\u179C', '\u17C1\u17C7', '+', '\u19FA'],
                ['\u1794', '\u1796', '\u179E', '\u19FB'],
                ['\u1793', '\u178E', '[', '\u19FC'],
                ['\u1798', '\u17C6', ']', '\u19FD'],
                ['\u17BB\u17C6', '\u17BB\u17C7', ',', '\u19FE'],
                ['\u17D4', '\u17D5', '.', '\u19FF'],
                ['\u17CA', '?', '/'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                ['\u200B', ' ', '\u00A0', ' '],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['km']
    },
    '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1': {
        'name': 'Kannada',
        'keys': [
            [
                ['\u0CCA', '\u0C92'],
                ['1', '', '\u0CE7'],
                ['2', '', '\u0CE8'],
                ['3', '\u0CCD\u0CB0', '\u0CE9'],
                ['4', '\u0CB0\u0CCD', '\u0CEA'],
                ['5', '\u0C9C\u0CCD\u0C9E', '\u0CEB'],
                ['6', '\u0CA4\u0CCD\u0CB0', '\u0CEC'],
                ['7', '\u0C95\u0CCD\u0CB7', '\u0CED'],
                ['8', '\u0CB6\u0CCD\u0CB0', '\u0CEE'],
                ['9', '(', '\u0CEF'],
                ['0', ')', '\u0CE6'],
                ['-', '\u0C83'],
                ['\u0CC3', '\u0C8B', '\u0CC4', '\u0CE0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0CCC', '\u0C94'],
                ['\u0CC8', '\u0C90', '\u0CD6'],
                ['\u0CBE', '\u0C86'],
                ['\u0CC0', '\u0C88', '', '\u0CE1'],
                ['\u0CC2', '\u0C8A'],
                ['\u0CAC', '\u0CAD'],
                ['\u0CB9', '\u0C99'],
                ['\u0C97', '\u0C98'],
                ['\u0CA6', '\u0CA7'],
                ['\u0C9C', '\u0C9D'],
                ['\u0CA1', '\u0CA2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0CCB', '\u0C93'],
                ['\u0CC7', '\u0C8F', '\u0CD5'],
                ['\u0CCD', '\u0C85'],
                ['\u0CBF', '\u0C87', '', '\u0C8C'],
                ['\u0CC1', '\u0C89'],
                ['\u0CAA', '\u0CAB', '', '\u0CDE'],
                ['\u0CB0', '\u0CB1'],
                ['\u0C95', '\u0C96'],
                ['\u0CA4', '\u0CA5'],
                ['\u0C9A', '\u0C9B'],
                ['\u0C9F', '\u0CA0'],
                ['', '\u0C9E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0CC6', '\u0C8F'],
                ['\u0C82'],
                ['\u0CAE', '\u0CA3'],
                ['\u0CA8'],
                ['\u0CB5'],
                ['\u0CB2', '\u0CB3'],
                ['\u0CB8', '\u0CB6'],
                [',', '\u0CB7'],
                ['.', '|'],
                ['\u0CAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['kn']
    },
    '\ud55c\uad6d\uc5b4': {
        'name': 'Korean',
        'keys': [
            [
                ['`', '~', '`', '~'],
                ['1', '!', '1', '!'],
                ['2', '@', '2', '@'],
                ['3', '#', '3', '#'],
                ['4', '$', '4', '$'],
                ['5', '%', '5', '%'],
                ['6', '^', '6', '^'],
                ['7', '&', '7', '&'],
                ['8', '*', '8', '*'],
                ['9', ')', '9', ')'],
                ['0', '(', '0', '('],
                ['-', '_', '-', '_'],
                ['=', '+', '=', '+'],
                ['\u20A9', '|', '\u20A9', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1107', '\u1108', 'q', 'Q'],
                ['\u110C', '\u110D', 'w', 'W'],
                ['\u1103', '\u1104', 'e', 'E'],
                ['\u1100', '\u1101', 'r', 'R'],
                ['\u1109', '\u110A', 't', 'T'],
                ['\u116D', '', 'y', 'Y'],
                ['\u1167', '', 'u', 'U'],
                ['\u1163', '', 'i', 'I'],
                ['\u1162', '\u1164', 'o', 'O'],
                ['\u1166', '\u1168', 'p', 'P'],
                ['[', '{', '[', '{'],
                [']', '}', ']', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u1106', '', 'a', 'A'],
                ['\u1102', '', 's', 'S'],
                ['\u110B', '', 'd', 'D'],
                ['\u1105', '', 'f', 'F'],
                ['\u1112', '', 'g', 'G'],
                ['\u1169', '', 'h', 'H'],
                ['\u1165', '', 'j', 'J'],
                ['\u1161', '', 'k', 'K'],
                ['\u1175', '', 'l', 'L'],
                [';', ':', ';', ':'],
                ['\'', '"', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u110F', '', 'z', 'Z'],
                ['\u1110', '', 'x', 'X'],
                ['\u110E', '', 'c', 'C'],
                ['\u1111', '', 'v', 'V'],
                ['\u1172', '', 'b', 'B'],
                ['\u116E', '', 'n', 'N'],
                ['\u1173', '', 'm', 'M'],
                [',', '<', ',', '<'],
                ['.', '>', '.', '>'],
                ['/', '?', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                ['Kor', KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ko']
    },
    'Kurd\u00ee': {
        'name': 'Kurdish',
        'keys': [
            [
                ['\u20ac', '~'],
                ['\u0661', '!'],
                ['\u0662', '@'],
                ['\u0663', '#'],
                ['\u0664', '$'],
                ['\u0665', '%'],
                ['\u0666', '^'],
                ['\u0667', '&'],
                ['\u0668', '*'],
                ['\u0669', '('],
                ['\u0660', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0642', '`'],
                ['\u0648', '\u0648\u0648'],
                ['\u06d5', '\u064a'],
                ['\u0631', '\u0695'],
                ['\u062a', '\u0637'],
                ['\u06cc', '\u06ce'],
                ['\u0626', '\u0621'],
                ['\u062d', '\u0639'],
                ['\u06c6', '\u0624'],
                ['\u067e', '\u062b'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0627', '\u0622'],
                ['\u0633', '\u0634'],
                ['\u062f', '\u0630'],
                ['\u0641', '\u0625'],
                ['\u06af', '\u063a'],
                ['\u0647', '\u200c'],
                ['\u0698', '\u0623'],
                ['\u06a9', '\u0643'],
                ['\u0644', '\u06b5'],
                ['\u061b', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0632', '\u0636'],
                ['\u062e', '\u0635'],
                ['\u062c', '\u0686'],
                ['\u06a4', '\u0638'],
                ['\u0628', '\u0649'],
                ['\u0646', '\u0629'],
                ['\u0645', '\u0640'],
                ['\u060c', '<'],
                ['.', '>'],
                ['/', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ku']
    },
    '\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430': {
        'name': 'Kyrgyz',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423', '\u04AF', '\u04AE'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D', '\u04A3', '\u04A2'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E', '\u04E9', '\u04E8'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ky']
    },
    'Latvie\u0161u': {
        'name': 'Latvian',
        'keys': [
            [
                ['\u00AD', '?'],
                ['1', '!', '\u00AB'],
                ['2', '\u00AB', '', '@'],
                ['3', '\u00BB', '', '#'],
                ['4', '$', '\u20AC', '$'],
                ['5', '%', '"', '~'],
                ['6', '/', '\u2019', '^'],
                ['7', '&', '', '\u00B1'],
                ['8', '\u00D7', ':'],
                ['9', '('],
                ['0', ')'],
                ['-', '_', '\u2013', '\u2014'],
                ['f', 'F', '=', ';'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u016B', '\u016A', 'q', 'Q'],
                ['g', 'G', '\u0123', '\u0122'],
                ['j', 'J'],
                ['r', 'R', '\u0157', '\u0156'],
                ['m', 'M', 'w', 'W'],
                ['v', 'V', 'y', 'Y'],
                ['n', 'N'],
                ['z', 'Z'],
                ['\u0113', '\u0112'],
                ['\u010D', '\u010C'],
                ['\u017E', '\u017D', '[', '{'],
                ['h', 'H', ']', '}'],
                ['\u0137', '\u0136']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0161', '\u0160'],
                ['u', 'U'],
                ['s', 'S'],
                ['i', 'I'],
                ['l', 'L'],
                ['d', 'D'],
                ['a', 'A'],
                ['t', 'T'],
                ['e', 'E', '\u20AC'],
                ['c', 'C'],
                ['\u00B4', '\u00B0', '\u00B4', '\u00A8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0146', '\u0145'],
                ['b', 'B', 'x', 'X'],
                ['\u012B', '\u012A'],
                ['k', 'K', '\u0137', '\u0136'],
                ['p', 'P'],
                ['o', 'O', '\u00F5', '\u00D5'],
                ['\u0101', '\u0100'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['\u013C', '\u013B'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['lv']
    },
    'Lietuvi\u0173': {
        'name': 'Lithuanian',
        'keys': [
            [
                ['`', '~'],
                ['\u0105', '\u0104'],
                ['\u010D', '\u010C'],
                ['\u0119', '\u0118'],
                ['\u0117', '\u0116'],
                ['\u012F', '\u012E'],
                ['\u0161', '\u0160'],
                ['\u0173', '\u0172'],
                ['\u016B', '\u016A'],
                ['\u201E', '('],
                ['\u201C', ')'],
                ['-', '_'],
                ['\u017E', '\u017D'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u2013', '\u20AC'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['lt']
    },
    'Magyar': {
        'name': 'Hungarian',
        'keys': [
            [
                ['0', '\u00a7'],
                ['1', '\'', '~'],
                ['2', '"', '\u02c7'],
                ['3', '+', '\u02c6'],
                ['4', '!', '\u02d8'],
                ['5', '%', '\u00b0'],
                ['6', '/', '\u02db'],
                ['7', '=', '`'],
                ['8', '(', '\u02d9'],
                ['9', ')', '\u00b4'],
                ['\u00f6', '\u00d6', '\u02dd'],
                ['\u00fc', '\u00dc', '\u00a8'],
                ['\u00f3', '\u00d3', '\u00b8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u00c4'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U', '\u20ac'],
                ['i', 'I', '\u00cd'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u0151', '\u0150', '\u00f7'],
                ['\u00fa', '\u00da', '\u00d7'],
                ['\u0171', '\u0170', '\u00a4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e4'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J', '\u00ed'],
                ['k', 'K', '\u0141'],
                ['l', 'L', '\u0142'],
                ['\u00e9', '\u00c9', '$'],
                ['\u00e1', '\u00c1', '\u00df'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u00ed', '\u00cd', '<'],
                ['y', 'Y', '>'],
                ['x', 'X', '#'],
                ['c', 'C', '&'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '<'],
                [',', '?', ';'],
                ['.', ':', '>'],
                ['-', '_', '*'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hu']
    },
    'Malti': {
        'name': 'Maltese 48',
        'keys': [
            [
                ['\u010B', '\u010A', '`'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u20ac', '\u00A3'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00E8', '\u00C8'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U', '\u00F9', '\u00D9'],
                ['i', 'I', '\u00EC', '\u00cc'],
                ['o', 'O', '\u00F2', '\u00D2'],
                ['p', 'P'],
                ['\u0121', '\u0120', '[', '{'],
                ['\u0127', '\u0126', ']', '}'],
                ['#', '\u017e']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E0', '\u00C0'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u017c', '\u017b', '\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?', '', '`'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mt']
    },
    '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438': {
        'name': 'Macedonian Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '\u201E'],
                ['3', '\u201C'],
                ['4', '\u2019'],
                ['5', '%'],
                ['6', '\u2018'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0459', '\u0409'],
                ['\u045A', '\u040A'],
                ['\u0435', '\u0415', '\u20AC'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u0455', '\u0405'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043E', '\u041E'],
                ['\u043F', '\u041F'],
                ['\u0448', '\u0428', '\u0402'],
                ['\u0453', '\u0403', '\u0452'],
                ['\u0436', '\u0416']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424', '['],
                ['\u0433', '\u0413', ']'],
                ['\u0445', '\u0425'],
                ['\u0458', '\u0408'],
                ['\u043A', '\u041A'],
                ['\u043B', '\u041B'],
                ['\u0447', '\u0427', '\u040B'],
                ['\u045C', '\u040C', '\u045B'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0451', '\u0401'],
                ['\u0437', '\u0417'],
                ['\u045F', '\u040F'],
                ['\u0446', '\u0426'],
                ['\u0432', '\u0412', '@'],
                ['\u0431', '\u0411', '{'],
                ['\u043D', '\u041D', '}'],
                ['\u043C', '\u041C', '\u00A7'],
                [',', ';'],
                ['.', ':'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mk']
    },
    '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02': {
        'name': 'Malayalam',
        'keys': [
            [
                ['\u0D4A', '\u0D12'],
                ['1', '', '\u0D67'],
                ['2', '', '\u0D68'],
                ['3', '\u0D4D\u0D30', '\u0D69'],
                ['4', '', '\u0D6A'],
                ['5', '', '\u0D6B'],
                ['6', '', '\u0D6C'],
                ['7', '\u0D15\u0D4D\u0D37', '\u0D6D'],
                ['8', '', '\u0D6E'],
                ['9', '(', '\u0D6F'],
                ['0', ')', '\u0D66'],
                ['-', '\u0D03'],
                ['\u0D43', '\u0D0B', '', '\u0D60'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0D4C', '\u0D14', '\u0D57'],
                ['\u0D48', '\u0D10'],
                ['\u0D3E', '\u0D06'],
                ['\u0D40', '\u0D08', '', '\u0D61'],
                ['\u0D42', '\u0D0A'],
                ['\u0D2C', '\u0D2D'],
                ['\u0D39', '\u0D19'],
                ['\u0D17', '\u0D18'],
                ['\u0D26', '\u0D27'],
                ['\u0D1C', '\u0D1D'],
                ['\u0D21', '\u0D22'],
                ['', '\u0D1E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0D4B', '\u0D13'],
                ['\u0D47', '\u0D0F'],
                ['\u0D4D', '\u0D05', '', '\u0D0C'],
                ['\u0D3F', '\u0D07'],
                ['\u0D41', '\u0D09'],
                ['\u0D2A', '\u0D2B'],
                ['\u0D30', '\u0D31'],
                ['\u0D15', '\u0D16'],
                ['\u0D24', '\u0D25'],
                ['\u0D1A', '\u0D1B'],
                ['\u0D1F', '\u0D20'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0D46', '\u0D0F'],
                ['\u0D02'],
                ['\u0D2E', '\u0D23'],
                ['\u0D28'],
                ['\u0D35', '\u0D34'],
                ['\u0D32', '\u0D33'],
                ['\u0D38', '\u0D36'],
                [',', '\u0D37'],
                ['.'],
                ['\u0D2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ml']
    },
    'Misc. Symbols': {
        'name': 'Misc. Symbols',
        'keys': [
            [
                ['\u2605', '\u2606', '\u260e', '\u260f'],
                ['\u2648', '\u2673', '\u2659', '\u2630'],
                ['\u2649', '\u2674', '\u2658', '\u2631'],
                ['\u264a', '\u2675', '\u2657', '\u2632'],
                ['\u264b', '\u2676', '\u2656', '\u2633'],
                ['\u264c', '\u2677', '\u2655', '\u2634'],
                ['\u264d', '\u2678', '\u2654', '\u2635'],
                ['\u264e', '\u2679', '\u265f', '\u2636'],
                ['\u264f', '\u267a', '\u265e', '\u2637'],
                ['\u2650', '\u267b', '\u265d', '\u2686'],
                ['\u2651', '\u267c', '\u265c', '\u2687'],
                ['\u2652', '\u267d', '\u265b', '\u2688'],
                ['\u2653', '\u2672', '\u265a', '\u2689'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                ['\u263f', '\u2680', '\u268a', '\u26a2'],
                ['\u2640', '\u2681', '\u268b', '\u26a3'],
                ['\u2641', '\u2682', '\u268c', '\u26a4'],
                ['\u2642', '\u2683', '\u268d', '\u26a5'],
                ['\u2643', '\u2684', '\u268e', '\u26a6'],
                ['\u2644', '\u2685', '\u268f', '\u26a7'],
                ['\u2645', '\u2620', '\u26ff', '\u26a8'],
                ['\u2646', '\u2622', '\u2692', '\u26a9'],
                ['\u2647', '\u2623', '\u2693', '\u26b2'],
                ['\u2669', '\u266d', '\u2694', '\u26ac'],
                ['\u266a', '\u266e', '\u2695', '\u26ad'],
                ['\u266b', '\u266f', '\u2696', '\u26ae'],
                ['\u266c', '\u2607', '\u2697', '\u26af'],
                ['\u26f9', '\u2608', '\u2698', '\u26b0'],
                ['\u267f', '\u262e', '\u2638', '\u2609']
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u261e', '\u261c', '\u261d', '\u261f'],
                ['\u261b', '\u261a', '\u2618', '\u2619'],
                ['\u2602', '\u2614', '\u26f1', '\u26d9'],
                ['\u2615', '\u2668', '\u26fe', '\u26d8'],
                ['\u263a', '\u2639', '\u263b', '\u26dc'],
                ['\u2617', '\u2616', '\u26ca', '\u26c9'],
                ['\u2660', '\u2663', '\u2665', '\u2666'],
                ['\u2664', '\u2667', '\u2661', '\u2662'],
                ['\u26c2', '\u26c0', '\u26c3', '\u26c1'],
                ['\u2624', '\u2625', '\u269a', '\u26b1'],
                ['\u2610', '\u2611', '\u2612', '\u2613'],
                ['\u2628', '\u2626', '\u2627', '\u2629'],
                ['\u262a', '\u262b', '\u262c', '\u262d'],
                ['\u26fa', '\u26fb', '\u26fc', '\u26fd']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u262f', '\u2670', '\u2671', '\u267e'],
                ['\u263c', '\u2699', '\u263d', '\u263e'],
                ['\u26c4', '\u2603', '\u26c7', '\u26c6'],
                ['\u26a0', '\u26a1', '\u2621', '\u26d4'],
                ['\u26e4', '\u26e5', '\u26e6', '\u26e7'],
                ['\u260a', '\u260b', '\u260c', '\u260d'],
                ['\u269c', '\u269b', '\u269d', '\u2604'],
                ['\u26b3', '\u26b4', '\u26b5', '\u26b6'],
                ['\u26b7', '\u26bf', '\u26b8', '\u26f8'],
                ['\u26b9', '\u26ba', '\u26bb', '\u26bc'],
                ['\u26bd', '\u26be', '\u269f', '\u269e'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u2600', '\u2601', '\u26c5', '\u26c8'],
                ['\u2691', '\u2690', '\u26ab', '\u26aa'],
                ['\u26cb', '\u26cc', '\u26cd', '\u26ce'],
                ['\u26cf', '\u26d0', '\u26d1', '\u26d2'],
                ['\u26d3', '\u26d5', '\u26d6', '\u26d7'],
                ['\u26da', '\u26db', '\u26dd', '\u26de'],
                ['\u26df', '\u26e0', '\u26e1', '\u26e2'],
                ['\u26e3', '\u26e8', '\u26e9', '\u26ea'],
                ['\u26eb', '\u26ec', '\u26ed', '\u26ee'],
                ['\u26ef', '\u26f0', '\u26f2', '\u26f3'],
                ['\u26f4', '\u26f5', '\u26f6', '\u26f7'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ]
    },
    '\u041c\u043e\u043d\u0433\u043e\u043b': {
        'name': 'Mongolian Cyrillic',
        'keys': [
            [
                ['=', '+'],
                ['\u2116', '1'],
                ['-', '2'],
                ['"', '3'],
                ['\u20AE', '4'],
                [':', '5'],
                ['.', '6'],
                ['_', '7'],
                [',', '8'],
                ['%', '9'],
                ['?', '0'],
                ['\u0435', '\u0415'],
                ['\u0449', '\u0429'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0444', '\u0424'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u0436', '\u0416'],
                ['\u044d', '\u042d'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04af', '\u04AE'],
                ['\u0437', '\u0417'],
                ['\u043A', '\u041a'],
                ['\u044A', '\u042A'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0439', '\u0419'],
                ['\u044B', '\u042B'],
                ['\u0431', '\u0411'],
                ['\u04e9', '\u04e8'],
                ['\u0430', '\u0410'],
                ['\u0445', '\u0425'],
                ['\u0440', '\u0420'],
                ['\u043e', '\u041e'],
                ['\u043B', '\u041b'],
                ['\u0434', '\u0414'],
                ['\u043f', '\u041f'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0451', '\u0401'],
                ['\u0441', '\u0421'],
                ['\u043c', '\u041c'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044c', '\u042c'],
                ['\u0432', '\u0412'],
                ['\u044e', '\u042e'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['mn']
    },
    '\u092e\u0930\u093e\u0920\u0940': {
        'name': 'Marathi',
        'keys': [
            [
                ['', '', '`', '~'],
                ['\u0967', '\u090D', '1', '!'],
                ['\u0968', '\u0945', '2', '@'],
                ['\u0969', '\u094D\u0930', '3', '#'],
                ['\u096A', '\u0930\u094D', '4', '$'],
                ['\u096B', '\u091C\u094D\u091E', '5', '%'],
                ['\u096C', '\u0924\u094D\u0930', '6', '^'],
                ['\u096D', '\u0915\u094D\u0937', '7', '&'],
                ['\u096E', '\u0936\u094D\u0930', '8', '*'],
                ['\u096F', '(', '9', '('],
                ['\u0966', ')', '0', ')'],
                ['-', '\u0903', '-', '_'],
                ['\u0943', '\u090B', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D'],
                ['\u0921', '\u0922', '[', '{'],
                ['\u093C', '\u091E', ']', '}'],
                ['\u0949', '\u0911', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', ';', ':'],
                ['\u091F', '\u0920', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923'],
                ['\u0928'],
                ['\u0935'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', ',', '<'],
                ['.', '\u0964', '.', '>'],
                ['\u092F', '\u095F', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mr']
    },
    '\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c': {
        'name': 'Burmese',
        'keys': [
            [
                ['\u1039`', '~'],
                ['\u1041', '\u100D'],
                ['\u1042', '\u100E'],
                ['\u1043', '\u100B'],
                ['\u1044', '\u1000\u103B\u1015\u103A'],
                ['\u1045', '%'],
                ['\u1046', '/'],
                ['\u1047', '\u101B'],
                ['\u1048', '\u1002'],
                ['\u1049', '('],
                ['\u1040', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1006', '\u1029'],
                ['\u1010', '\u1040'],
                ['\u1014', '\u103F'],
                ['\u1019', '\u1023'],
                ['\u1021', '\u1024'],
                ['\u1015', '\u104C'],
                ['\u1000', '\u1009'],
                ['\u1004', '\u104D'],
                ['\u101E', '\u1025'],
                ['\u1005', '\u100F'],
                ['\u101F', '\u1027'],
                ['\u2018', '\u2019'],
                ['\u104F', '\u100B\u1039\u100C']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u200B\u1031', '\u1017'],
                ['\u200B\u103B', '\u200B\u103E'],
                ['\u200B\u102D', '\u200B\u102E'],
                ['\u200B\u103A', '\u1004\u103A\u1039\u200B'],
                ['\u200B\u102B', '\u200B\u103D'],
                ['\u200B\u1037', '\u200B\u1036'],
                ['\u200B\u103C', '\u200B\u1032'],
                ['\u200B\u102F', '\u200B\u102F'],
                ['\u200B\u1030', '\u200B\u1030'],
                ['\u200B\u1038', '\u200B\u102B\u103A'],
                ['\u1012', '\u1013'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u1016', '\u1007'],
                ['\u1011', '\u100C'],
                ['\u1001', '\u1003'],
                ['\u101C', '\u1020'],
                ['\u1018', '\u1026'],
                ['\u100A', '\u1008'],
                ['\u200B\u102C', '\u102A'],
                ['\u101A', '\u101B'],
                ['.', '\u101B'],
                ['\u104B', '\u104A'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['my']
    },
    'Nederlands': {
        'name': 'Dutch',
        'keys': [
            [
                ['@', '\u00a7', '\u00ac'],
                ['1', '!', '\u00b9'],
                ['2', '"', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00bc'],
                ['5', '%', '\u00bd'],
                ['6', '&', '\u00be'],
                ['7', '_', '\u00a3'],
                ['8', '(', '{'],
                ['9', ')', '}'],
                ['0', '\''],
                ['/', '?', '\\'],
                ['\u00b0', '~', '\u00b8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R', '\u00b6'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00a8', '^'],
                ['*', '|'],
                ['<', '>']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u00df'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['+', '\u00b1'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [']', '[', '\u00a6'],
                ['z', 'Z', '\u00ab'],
                ['x', 'X', '\u00bb'],
                ['c', 'C', '\u00a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00b5'],
                [',', ';'],
                ['.', ':', '\u00b7'],
                ['-', '='],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['nl']
    },
    'Norsk': {
        'name': 'Norwegian',
        'keys': [
            [
                ['|', '\u00a7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\\', '`', '\u00b4'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f8', '\u00d8'],
                ['\u00e6', '\u00c6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['no', 'nb', 'nn']
    },
    '\u067e\u069a\u062a\u0648': {
        'name': 'Pashto',
        'keys': [
            [
                ['\u200d', '\u00f7', '`'],
                ['\u06f1', '!', '`'],
                ['\u06f2', '\u066c', '@'],
                ['\u06f3', '\u066b', '\u066b'],
                ['\u06f4', '\u00a4', '\u00a3'],
                ['\u06f5', '\u066a', '%'],
                ['\u06f6', '\u00d7', '^'],
                ['\u06f7', '\u00ab', '&'],
                ['\u06f8', '\u00bb', '*'],
                ['\u06f9', '(', '\ufdf2'],
                ['\u06f0', ')', '\ufefb'],
                ['-', '\u0640', '_'],
                ['=', '+', '\ufe87', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u0652', '\u06d5'],
                ['\u0635', '\u064c', '\u0653'],
                ['\u062b', '\u064d', '\u20ac'],
                ['\u0642', '\u064b', '\ufef7'],
                ['\u0641', '\u064f', '\ufef5'],
                ['\u063a', '\u0650', '\''],
                ['\u0639', '\u064e', '\ufe84'],
                ['\u0647', '\u0651', '\u0670'],
                ['\u062e', '\u0681', '\''],
                ['\u062d', '\u0685', '"'],
                ['\u062c', ']', '}'],
                ['\u0686', '[', '{'],
                ['\\', '\u066d', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u069a', '\ufbb0'],
                ['\u0633', '\u06cd', '\u06d2'],
                ['\u06cc', '\u064a', '\u06d2'],
                ['\u0628', '\u067e', '\u06ba'],
                ['\u0644', '\u0623', '\u06b7'],
                ['\u0627', '\u0622', '\u0671'],
                ['\u062a', '\u067c', '\u0679'],
                ['\u0646', '\u06bc', '<'],
                ['\u0645', '\u0629', '>'],
                ['\u06a9', ':', '\u0643'],
                ['\u06af', '\u061b', '\u06ab'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '\u0626', '?'],
                ['\u0637', '\u06d0', ';'],
                ['\u0632', '\u0698', '\u0655'],
                ['\u0631', '\u0621', '\u0654'],
                ['\u0630', '\u200c', '\u0625'],
                ['\u062f', '\u0689', '\u0688'],
                ['\u0693', '\u0624', '\u0691'],
                ['\u0648', '\u060c', ','],
                ['\u0696', '.', '\u06c7'],
                ['/', '\u061f', '\u06c9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, '\u064d']
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ps']
    },
    '\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40': {
        'name': 'Punjabi (Gurmukhi)',
        'keys': [
            [
                [''],
                ['1', '\u0A4D\u0A35', '\u0A67', '\u0A67'],
                ['2', '\u0A4D\u0A2F', '\u0A68', '\u0A68'],
                ['3', '\u0A4D\u0A30', '\u0A69', '\u0A69'],
                ['4', '\u0A71', '\u0A6A', '\u0A6A'],
                ['5', '', '\u0A6B', '\u0A6B'],
                ['6', '', '\u0A6C', '\u0A6C'],
                ['7', '', '\u0A6D', '\u0A6D'],
                ['8', '', '\u0A6E', '\u0A6E'],
                ['9', '(', '\u0A6F', '\u0A6F'],
                ['0', ')', '\u0A66', '\u0A66'],
                ['-'],
                [''],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0A4C', '\u0A14'],
                ['\u0A48', '\u0A10'],
                ['\u0A3E', '\u0A06'],
                ['\u0A40', '\u0A08'],
                ['\u0A42', '\u0A0A'],
                ['\u0A2C', '\u0A2D'],
                ['\u0A39', '\u0A19'],
                ['\u0A17', '\u0A18', '\u0A5A', '\u0A5A'],
                ['\u0A26', '\u0A27'],
                ['\u0A1C', '\u0A1D', '\u0A5B', '\u0A5B'],
                ['\u0A21', '\u0A22', '\u0A5C', '\u0A5C'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0A4B', '\u0A13'],
                ['\u0A47', '\u0A0F'],
                ['\u0A4D', '\u0A05'],
                ['\u0A3F', '\u0A07'],
                ['\u0A41', '\u0A09'],
                ['\u0A2A', '\u0A2B', '\u0A5E', '\u0A5E'],
                ['\u0A30'],
                ['\u0A15', '\u0A16', '\u0A59', '\u0A59'],
                ['\u0A24', '\u0A25'],
                ['\u0A1A', '\u0A1B'],
                ['\u0A1F', '\u0A20'],
                ['\u0A3C', '\u0A1E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0A02', '\u0A02'],
                ['\u0A2E', '\u0A23'],
                ['\u0A28'],
                ['\u0A35', '\u0A72', '\u0A73', '\u0A73'],
                ['\u0A32', '\u0A33'],
                ['\u0A38', '\u0A36'],
                [','],
                ['.', '|', '\u0965', '\u0965'],
                ['\u0A2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pa']
    },
    '\u62fc\u97f3 (Pinyin)': {
        'name': 'Pinyin',
        'keys': [
            [
                ['`', '~', '\u4e93', '\u301C'],
                ['1', '!', '\uFF62'],
                ['2', '@', '\uFF63'],
                ['3', '#', '\u301D'],
                ['4', '$', '\u301E'],
                ['5', '%', '\u301F'],
                ['6', '^', '\u3008'],
                ['7', '&', '\u3009'],
                ['8', '*', '\u302F'],
                ['9', '(', '\u300A'],
                ['0', ')', '\u300B'],
                ['-', '_', '\u300E'],
                ['=', '+', '\u300F'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u0101', '\u0100'],
                ['w', 'W', '\u00E1', '\u00C1'],
                ['e', 'E', '\u01CE', '\u01CD'],
                ['r', 'R', '\u00E0', '\u00C0'],
                ['t', 'T', '\u0113', '\u0112'],
                ['y', 'Y', '\u00E9', '\u00C9'],
                ['u', 'U', '\u011B', '\u011A'],
                ['i', 'I', '\u00E8', '\u00C8'],
                ['o', 'O', '\u012B', '\u012A'],
                ['p', 'P', '\u00ED', '\u00CD'],
                ['[', '{', '\u01D0', '\u01CF'],
                [']', '}', '\u00EC', '\u00CC'],
                ['\\', '|', '\u3020']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u014D', '\u014C'],
                ['s', 'S', '\u00F3', '\u00D3'],
                ['d', 'D', '\u01D2', '\u01D1'],
                ['f', 'F', '\u00F2', '\u00D2'],
                ['g', 'G', '\u00fc', '\u00dc'],
                ['h', 'H', '\u016B', '\u016A'],
                ['j', 'J', '\u00FA', '\u00DA'],
                ['k', 'K', '\u01D4', '\u01D3'],
                ['l', 'L', '\u00F9', '\u00D9'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u01D6', '\u01D5'],
                ['x', 'X', '\u01D8', '\u01D7'],
                ['c', 'C', '\u01DA', '\u01D9'],
                ['v', 'V', '\u01DC', '\u01DB'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<', '\u3001'],
                ['.', '>', '\u3002'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['zh-LATN']
    },
    'Polski': {
        'name': 'Polish (214)',
        'keys': [
            [
                ['\u02DB', '\u00B7'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '\u00A4', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '&', '\u02DB'],
                ['7', '/', '`'],
                ['8', '(', '\u00B7'],
                ['9', ')', '\u00B4'],
                ['0', '=', '\u02DD'],
                ['+', '?', '\u00A8'],
                ['\'', '*', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '\u00A6'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U', '\u20AC'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u017C', '\u0144', '\u00F7'],
                ['\u015B', '\u0107', '\u00D7'],
                ['\u00F3', '\u017A']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u0142', '\u0141', '$'],
                ['\u0105', '\u0119', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    'Polski Programisty': {
        'name': 'Polish Programmers',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u0119', '\u0118'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u0105', '\u0104'],
                ['s', 'S', '\u015b', '\u015a'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u0142', '\u0141'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u017c', '\u017b'],
                ['x', 'X', '\u017a', '\u0179'],
                ['c', 'C', '\u0107', '\u0106'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N', '\u0144', '\u0143'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['pl']
    },
    'Portugu\u00eas Brasileiro': {
        'name': 'Portuguese (Brazil)',
        'keys': [
            [
                ['\'', '"'],
                ['1', '!', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a3'],
                ['5', '%', '\u00a2'],
                ['6', '\u00a8', '\u00ac'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+', '\u00a7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '/'],
                ['w', 'W', '?'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00b4', '`'],
                ['[', '{', '\u00aa'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e7', '\u00c7'],
                ['~', '^'],
                [']', '}', '\u00ba'],
                ['/', '?']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C', '\u20a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                [':', ':'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pt-BR']
    },
    'Portugu\u00eas': {
        'name': 'Portuguese',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '$', '\u00a7'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\'', '?'],
                ['\u00ab', '\u00bb'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['+', '*', '\u00a8'],
                ['\u00b4', '`'],
                ['~', '^']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e7', '\u00c7'],
                ['\u00ba', '\u00aa'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pt']
    },
    'Rom\u00e2n\u0103': {
        'name': 'Romanian',
        'keys': [
            [
                ['\u201E', '\u201D', '`', '~'],
                ['1', '!', '~'],
                ['2', '@', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '^', '\u02DB'],
                ['7', '&', '`'],
                ['8', '*', '\u02D9'],
                ['9', '(', '\u00B4'],
                ['0', ')', '\u02DD'],
                ['-', '_', '\u00A8'],
                ['=', '+', '\u00B8', '\u00B1'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P', '\u00A7'],
                ['\u0103', '\u0102', '[', '{'],
                ['\u00EE', '\u00CE', ']', '}'],
                ['\u00E2', '\u00C2', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u00df'],
                ['d', 'D', '\u00f0', '\u00D0'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u0142', '\u0141'],
                ['\u0219', '\u0218', ';', ':'],
                ['\u021B', '\u021A', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C', '\u00A9'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';', '<', '\u00AB'],
                ['.', ':', '>', '\u00BB'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ro']
    },
    '\u0420\u0443\u0441\u0441\u043a\u0438\u0439': {
        'name': 'Russian',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['/', '|'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ru']
    },
    'Schweizerdeutsch': {
        'name': 'Swiss German',
        'keys': [
            [
                ['\u00A7', '\u00B0'],
                ['1', '+', '\u00A6'],
                ['2', '"', '@'],
                ['3', '*', '#'],
                ['4', '\u00E7', '\u00B0'],
                ['5', '%', '\u00A7'],
                ['6', '&', '\u00AC'],
                ['7', '/', '|'],
                ['8', '(', '\u00A2'],
                ['9', ')'],
                ['0', '='],
                ['\'', '?', '\u00B4'],
                ['^', '`', '~'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FC', '\u00E8', '['],
                ['\u00A8', '!', ']'],
                ['$', '\u00A3', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00F6', '\u00E9'],
                ['\u00E4', '\u00E0', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['de-CH']
    },
    'Shqip': {
        'name': 'Albanian',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '^', '\u02DB'],
                ['7', '&', '`'],
                ['8', '*', '\u02D9'],
                ['9', '(', '\u00B4'],
                ['0', ')', '\u02DD'],
                ['-', '_', '\u00A8'],
                ['=', '+', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E7', '\u00C7', '\u00F7'],
                ['[', '{', '\u00DF'],
                [']', '}', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u00EB', '\u00CB', '$'],
                ['@', '\'', '\u00D7'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sq']
    },
    'Sloven\u010dina': {
        'name': 'Slovak',
        'keys': [
            [
                [';', '\u00b0'],
                ['+', '1', '~'],
                ['\u013E', '2', '\u02C7'],
                ['\u0161', '3', '^'],
                ['\u010D', '4', '\u02D8'],
                ['\u0165', '5', '\u00B0'],
                ['\u017E', '6', '\u02DB'],
                ['\u00FD', '7', '`'],
                ['\u00E1', '8', '\u02D9'],
                ['\u00ED', '9', '\u00B4'],
                ['\u00E9', '0', '\u02DD'],
                ['=', '%', '\u00A8'],
                ['\u00B4', '\u02c7', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P', '\''],
                ['\u00FA', '/', '\u00F7'],
                ['\u00E4', '(', '\u00D7'],
                ['\u0148', ')', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u00F4', '"', '$'],
                ['\u00A7', '!', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['&', '*', '<'],
                ['y', 'Y', '>'],
                ['x', 'X', '#'],
                ['c', 'C', '&'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M'],
                [',', '?', '<'],
                ['.', ':', '>'],
                ['-', '_', '*'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sk']
    },
    '\u0441\u0440\u043f\u0441\u043a\u0438': {
        'name': 'Serbian Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['+', '*'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0459', '\u0409'],
                ['\u045a', '\u040a'],
                ['\u0435', '\u0415', '\u20ac'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u0437', '\u0417'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043e', '\u041e'],
                ['\u043f', '\u041f'],
                ['\u0448', '\u0428'],
                ['\u0452', '\u0402'],
                ['\u0436', '\u0416']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424'],
                ['\u0433', '\u0413'],
                ['\u0445', '\u0425'],
                ['\u0458', '\u0408'],
                ['\u043a', '\u041a'],
                ['\u043b', '\u041b'],
                ['\u0447', '\u0427'],
                ['\u045b', '\u040b'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['\u0455', '\u0405'],
                ['\u045f', '\u040f'],
                ['\u0446', '\u0426'],
                ['\u0432', '\u0412'],
                ['\u0431', '\u0411'],
                ['\u043d', '\u041d'],
                ['\u043c', '\u041c'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_', '\u00a9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sr-CYRL']
    },
    'Suomi': {
        'name': 'Finnish',
        'keys': [
            [
                ['\u00a7', '\u00BD'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00A3'],
                ['4', '\u00A4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?', '\\'],
                ['\u00B4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u00E2', '\u00C2'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T', '\u0167', '\u0166'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I', '\u00ef', '\u00CF'],
                ['o', 'O', '\u00f5', '\u00D5'],
                ['p', 'P'],
                ['\u00E5', '\u00C5'],
                ['\u00A8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E1', '\u00C1'],
                ['s', 'S', '\u0161', '\u0160'],
                ['d', 'D', '\u0111', '\u0110'],
                ['f', 'F', '\u01e5', '\u01E4'],
                ['g', 'G', '\u01E7', '\u01E6'],
                ['h', 'H', '\u021F', '\u021e'],
                ['j', 'J'],
                ['k', 'K', '\u01e9', '\u01E8'],
                ['l', 'L'],
                ['\u00F6', '\u00D6', '\u00F8', '\u00D8'],
                ['\u00E4', '\u00C4', '\u00E6', '\u00C6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z', '\u017E', '\u017D'],
                ['x', 'X'],
                ['c', 'C', '\u010d', '\u010C'],
                ['v', 'V', '\u01EF', '\u01EE'],
                ['b', 'B', '\u0292', '\u01B7'],
                ['n', 'N', '\u014B', '\u014A'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fi']
    },
    'Svenska': {
        'name': 'Swedish',
        'keys': [
            [
                ['\u00a7', '\u00bd'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%', '\u20ac'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?', '\\'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f6', '\u00d6'],
                ['\u00e4', '\u00c4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sv']
    },
    'Swiss Fran\u00e7ais': {
        'name': 'Swiss French',
        'keys': [
            [
                ['\u00A7', '\u00B0'],
                ['1', '+', '\u00A6'],
                ['2', '"', '@'],
                ['3', '*', '#'],
                ['4', '\u00E7', '\u00B0'],
                ['5', '%', '\u00A7'],
                ['6', '&', '\u00AC'],
                ['7', '/', '|'],
                ['8', '(', '\u00A2'],
                ['9', ')'],
                ['0', '='],
                ['\'', '?', '\u00B4'],
                ['^', '`', '~'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E8', '\u00FC', '['],
                ['\u00A8', '!', ']'],
                ['$', '\u00A3', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E9', '\u00F6'],
                ['\u00E0', '\u00E4', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr-CH']
    },
    '\u0723\u0718\u072a\u071d\u071d\u0710': {
        'name': 'Syriac',
        'keys': [
            [
                ['\u070f', '\u032e', '\u0651', '\u0651'],
                ['1', '!', '\u0701', '\u0701'],
                ['2', '\u030a', '\u0702', '\u0702'],
                ['3', '\u0325', '\u0703', '\u0703'],
                ['4', '\u0749', '\u0704', '\u0704'],
                ['5', '\u2670', '\u0705', '\u0705'],
                ['6', '\u2671', '\u0708', '\u0708'],
                ['7', '\u070a', '\u0709', '\u0709'],
                ['8', '\u00bb', '\u070B', '\u070B'],
                ['9', ')', '\u070C', '\u070C'],
                ['0', '(', '\u070D', '\u070D'],
                ['-', '\u00ab', '\u250C', '\u250C'],
                ['=', '+', '\u2510', '\u2510'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0714', '\u0730', '\u064E', '\u064E'],
                ['\u0728', '\u0733', '\u064B', '\u064B'],
                ['\u0716', '\u0736', '\u064F', '\u064F'],
                ['\u0729', '\u073A', '\u064C', '\u064C'],
                ['\u0726', '\u073D', '\u0653', '\u0653'],
                ['\u071c', '\u0740', '\u0654', '\u0654'],
                ['\u0725', '\u0741', '\u0747', '\u0747'],
                ['\u0717', '\u0308', '\u0743', '\u0743'],
                ['\u071e', '\u0304', '\u0745', '\u0745'],
                ['\u071a', '\u0307', '\u032D', '\u032D'],
                ['\u0713', '\u0303'],
                ['\u0715', '\u074A'],
                ['\u0706', ':']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u072b', '\u0731', '\u0650', '\u0650'],
                ['\u0723', '\u0734', '\u064d', '\u064d'],
                ['\u071d', '\u0737'],
                ['\u0712', '\u073b', '\u0621', '\u0621'],
                ['\u0720', '\u073e', '\u0655', '\u0655'],
                ['\u0710', '\u0711', '\u0670', '\u0670'],
                ['\u072c', '\u0640', '\u0748', '\u0748'],
                ['\u0722', '\u0324', '\u0744', '\u0744'],
                ['\u0721', '\u0331', '\u0746', '\u0746'],
                ['\u071f', '\u0323'],
                ['\u071b', '\u0330'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [']', '\u0732'],
                ['[', '\u0735', '\u0652', '\u0652'],
                ['\u0724', '\u0738'],
                ['\u072a', '\u073c', '\u200D'],
                ['\u0727', '\u073f', '\u200C'],
                ['\u0700', '\u0739', '\u200E'],
                ['.', '\u0742', '\u200F'],
                ['\u0718', '\u060c'],
                ['\u0719', '\u061b'],
                ['\u0707', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['syc']
    },
    '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd': {
        'name': 'Tamil',
        'keys': [
            [
                ['\u0BCA', '\u0B92'],
                ['1', '', '\u0BE7'],
                ['2', '', '\u0BE8'],
                ['3', '', '\u0BE9'],
                ['4', '', '\u0BEA'],
                ['5', '', '\u0BEB'],
                ['6', '\u0BA4\u0BCD\u0BB0', '\u0BEC'],
                ['7', '\u0B95\u0BCD\u0BB7', '\u0BED'],
                ['8', '\u0BB7\u0BCD\u0BB0', '\u0BEE'],
                ['9', '', '\u0BEF'],
                ['0', '', '\u0BF0'],
                ['-', '\u0B83', '\u0BF1'],
                ['', '', '\u0BF2'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0BCC', '\u0B94'],
                ['\u0BC8', '\u0B90'],
                ['\u0BBE', '\u0B86'],
                ['\u0BC0', '\u0B88'],
                ['\u0BC2', '\u0B8A'],
                ['\u0BAA', '\u0BAA'],
                ['\u0BB9', '\u0B99'],
                ['\u0B95', '\u0B95'],
                ['\u0BA4', '\u0BA4'],
                ['\u0B9C', '\u0B9A'],
                ['\u0B9F', '\u0B9F'],
                ['\u0B9E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0BCB', '\u0B93'],
                ['\u0BC7', '\u0B8F'],
                ['\u0BCD', '\u0B85'],
                ['\u0BBF', '\u0B87'],
                ['\u0BC1', '\u0B89'],
                ['\u0BAA', '\u0BAA'],
                ['\u0BB0', '\u0BB1'],
                ['\u0B95', '\u0B95'],
                ['\u0BA4', '\u0BA4'],
                ['\u0B9A', '\u0B9A'],
                ['\u0B9F', '\u0B9F'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0BC6', '\u0B8E'],
                [''],
                ['\u0BAE', '\u0BA3'],
                ['\u0BA8', '\u0BA9'],
                ['\u0BB5', '\u0BB4'],
                ['\u0BB2', '\u0BB3'],
                ['\u0BB8', '\u0BB7'],
                [',', '\u0BB7'],
                ['.', '\u0BB8\u0BCD\u0BB0\u0BC0'],
                ['\u0BAF', '\u0BAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ta']
    },
    '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41': {
        'name': 'Telugu',
        'keys': [
            [
                ['\u0C4A', '\u0C12'],
                ['1', '', '\u0C67'],
                ['2', '', '\u0C68'],
                ['3', '\u0C4D\u0C30', '\u0C69'],
                ['4', '', '\u0C6A'],
                ['5', '\u0C1C\u0C4D\u0C1E', '\u0C6B'],
                ['6', '\u0C24\u0C4D\u0C30', '\u0C6C'],
                ['7', '\u0C15\u0C4D\u0C37', '\u0C6D'],
                ['8', '\u0C36\u0C4D\u0C30', '\u0C6E'],
                ['9', '(', '\u0C6F'],
                ['0', ')', '\u0C66'],
                ['-', '\u0C03'],
                ['\u0C43', '\u0C0B', '\u0C44'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0C4C', '\u0C14'],
                ['\u0C48', '\u0C10', '\u0C56'],
                ['\u0C3E', '\u0C06'],
                ['\u0C40', '\u0C08', '', '\u0C61'],
                ['\u0C42', '\u0C0A'],
                ['\u0C2C'],
                ['\u0C39', '\u0C19'],
                ['\u0C17', '\u0C18'],
                ['\u0C26', '\u0C27'],
                ['\u0C1C', '\u0C1D'],
                ['\u0C21', '\u0C22'],
                ['', '\u0C1E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0C4B', '\u0C13'],
                ['\u0C47', '\u0C0F', '\u0C55'],
                ['\u0C4D', '\u0C05'],
                ['\u0C3F', '\u0C07', '', '\u0C0C'],
                ['\u0C41', '\u0C09'],
                ['\u0C2A', '\u0C2B'],
                ['\u0C30', '\u0C31'],
                ['\u0C15', '\u0C16'],
                ['\u0C24', '\u0C25'],
                ['\u0C1A', '\u0C1B'],
                ['\u0C1F', '\u0C25'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0C46', '\u0C0E'],
                ['\u0C02', '\u0C01'],
                ['\u0C2E', '\u0C23'],
                ['\u0C28', '\u0C28'],
                ['\u0C35'],
                ['\u0C32', '\u0C33'],
                ['\u0C38', '\u0C36'],
                [',', '\u0C37'],
                ['.'],
                ['\u0C2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['te']
    },
    'Ti\u1ebfng Vi\u1ec7t': {
        'name': 'Vietnamese',
        'keys': [
            [
                ['`', '~', '`', '~'],
                ['\u0103', '\u0102', '1', '!'],
                ['\u00E2', '\u00C2', '2', '@'],
                ['\u00EA', '\u00CA', '3', '#'],
                ['\u00F4', '\u00D4', '4', '$'],
                ['\u0300', '\u0300', '5', '%'],
                ['\u0309', '\u0309', '6', '^'],
                ['\u0303', '\u0303', '7', '&'],
                ['\u0301', '\u0301', '8', '*'],
                ['\u0323', '\u0323', '9', '('],
                ['\u0111', '\u0110', '0', ')'],
                ['-', '_', '-', '_'],
                ['\u20AB', '+', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', 'q', 'Q'],
                ['w', 'W', 'w', 'W'],
                ['e', 'E', 'e', 'E'],
                ['r', 'R', 'r', 'R'],
                ['t', 'T', 't', 'T'],
                ['y', 'Y', 'y', 'Y'],
                ['u', 'U', 'u', 'U'],
                ['i', 'I', 'i', 'I'],
                ['o', 'O', 'o', 'O'],
                ['p', 'P', 'p', 'P'],
                ['\u01B0', '\u01AF', '[', '{'],
                ['\u01A1', '\u01A0', ']', '}'],
                ['\\', '|', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', 'a', 'A'],
                ['s', 'S', 's', 'S'],
                ['d', 'D', 'd', 'D'],
                ['f', 'F', 'f', 'F'],
                ['g', 'G', 'g', 'G'],
                ['h', 'H', 'h', 'H'],
                ['j', 'J', 'j', 'J'],
                ['k', 'K', 'k', 'K'],
                ['l', 'L', 'l', 'L'],
                [';', ':', ';', ':'],
                ['\'', '"', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', 'z', 'Z'],
                ['x', 'X', 'x', 'X'],
                ['c', 'C', 'c', 'C'],
                ['v', 'V', 'v', 'V'],
                ['b', 'B', 'b', 'B'],
                ['n', 'N', 'n', 'N'],
                ['m', 'M', 'm', 'M'],
                [',', '<', ',', '<'],
                ['.', '>', '.', '>'],
                ['/', '?', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['vi']
    },
    '\u0e44\u0e17\u0e22 Kedmanee': {
        'name': 'Thai Kedmanee',
        'keys': [
            [
                ['_', '%'],
                ['\u0E45', '+'],
                ['/', '\u0E51'],
                ['-', '\u0E52'],
                ['\u0E20', '\u0E53'],
                ['\u0E16', '\u0E54'],
                ['\u0E38', '\u0E39'],
                ['\u0E36', '\u0E3F'],
                ['\u0E04', '\u0E55'],
                ['\u0E15', '\u0E56'],
                ['\u0E08', '\u0E57'],
                ['\u0E02', '\u0E58'],
                ['\u0E0A', '\u0E59'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0E46', '\u0E50'],
                ['\u0E44', '"'],
                ['\u0E33', '\u0E0E'],
                ['\u0E1E', '\u0E11'],
                ['\u0E30', '\u0E18'],
                ['\u0E31', '\u0E4D'],
                ['\u0E35', '\u0E4A'],
                ['\u0E23', '\u0E13'],
                ['\u0E19', '\u0E2F'],
                ['\u0E22', '\u0E0D'],
                ['\u0E1A', '\u0E10'],
                ['\u0E25', ','],
                ['\u0E03', '\u0E05']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0E1F', '\u0E24'],
                ['\u0E2B', '\u0E06'],
                ['\u0E01', '\u0E0F'],
                ['\u0E14', '\u0E42'],
                ['\u0E40', '\u0E0C'],
                ['\u0E49', '\u0E47'],
                ['\u0E48', '\u0E4B'],
                ['\u0E32', '\u0E29'],
                ['\u0E2A', '\u0E28'],
                ['\u0E27', '\u0E0B'],
                ['\u0E07', '.'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0E1C', '('],
                ['\u0E1B', ')'],
                ['\u0E41', '\u0E09'],
                ['\u0E2D', '\u0E2E'],
                ['\u0E34', '\u0E3A'],
                ['\u0E37', '\u0E4C'],
                ['\u0E17', '?'],
                ['\u0E21', '\u0E12'],
                ['\u0E43', '\u0E2C'],
                ['\u0E1D', '\u0E26'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['th']
    },
    '\u0e44\u0e17\u0e22 Pattachote': {
        'name': 'Thai Pattachote',
        'keys': [
            [
                ['_', '\u0E3F'],
                ['=', '+'],
                ['\u0E52', '"'],
                ['\u0E53', '/'],
                ['\u0E54', ','],
                ['\u0E55', '?'],
                ['\u0E39', '\u0E38'],
                ['\u0E57', '_'],
                ['\u0E58', '.'],
                ['\u0E59', '('],
                ['\u0E50', ')'],
                ['\u0E51', '-'],
                ['\u0E56', '%'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0E47', '\u0E4A'],
                ['\u0E15', '\u0E24'],
                ['\u0E22', '\u0E46'],
                ['\u0E2D', '\u0E0D'],
                ['\u0E23', '\u0E29'],
                ['\u0E48', '\u0E36'],
                ['\u0E14', '\u0E1D'],
                ['\u0E21', '\u0E0B'],
                ['\u0E27', '\u0E16'],
                ['\u0E41', '\u0E12'],
                ['\u0E43', '\u0E2F'],
                ['\u0E0C', '\u0E26'],
                ['\uF8C7', '\u0E4D']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0E49', '\u0E4B'],
                ['\u0E17', '\u0E18'],
                ['\u0E07', '\u0E33'],
                ['\u0E01', '\u0E13'],
                ['\u0E31', '\u0E4C'],
                ['\u0E35', '\u0E37'],
                ['\u0E32', '\u0E1C'],
                ['\u0E19', '\u0E0A'],
                ['\u0E40', '\u0E42'],
                ['\u0E44', '\u0E06'],
                ['\u0E02', '\u0E11'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0E1A', '\u0E0E'],
                ['\u0E1B', '\u0E0F'],
                ['\u0E25', '\u0E10'],
                ['\u0E2B', '\u0E20'],
                ['\u0E34', '\u0E31'],
                ['\u0E04', '\u0E28'],
                ['\u0E2A', '\u0E2E'],
                ['\u0E30', '\u0E1F'],
                ['\u0E08', '\u0E09'],
                ['\u0E1E', '\u0E2C'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u0422\u0430\u0442\u0430\u0440\u0447\u0430': {
        'name': 'Tatar',
        'keys': [
            [
                ['\u04BB', '\u04BA', '\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '\u2116', '#'],
                ['4', ';', '$'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?', '['],
                ['8', '*', ']'],
                ['9', '(', '{'],
                ['0', ')', '}'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u04E9', '\u04E8', '\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04D9', '\u04D8', '\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u04AF', '\u04AE', '\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u04A3', '\u04A2', '\u0436', '\u0416'],
                ['\u044D', '\u042D', '\''],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0491', '\u0490'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u0497', '\u0496', '\u044C', '\u042C'],
                ['\u0431', '\u0411', '<'],
                ['\u044E', '\u042E', '>'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['tt']
    },
    'T\u00fcrk\u00e7e F': {
        'name': 'Turkish F',
        'keys': [
            [
                ['+', '*', '\u00ac'],
                ['1', '!', '\u00b9', '\u00a1'],
                ['2', '"', '\u00b2'],
                ['3', '^', '#', '\u00b3'],
                ['4', '$', '\u00bc', '\u00a4'],
                ['5', '%', '\u00bd'],
                ['6', '&', '\u00be'],
                ['7', '\'', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['/', '?', '\\', '\u00bf'],
                ['-', '_', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['f', 'F', '@'],
                ['g', 'G'],
                ['\u011f', '\u011e'],
                ['\u0131', 'I', '\u00b6', '\u00ae'],
                ['o', 'O'],
                ['d', 'D', '\u00a5'],
                ['r', 'R'],
                ['n', 'N'],
                ['h', 'H', '\u00f8', '\u00d8'],
                ['p', 'P', '\u00a3'],
                ['q', 'Q', '\u00a8'],
                ['w', 'W', '~'],
                ['x', 'X', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['u', 'U', '\u00e6', '\u00c6'],
                ['i', '\u0130', '\u00df', '\u00a7'],
                ['e', 'E', '\u20ac'],
                ['a', 'A', ' ', '\u00aa'],
                ['\u00fc', '\u00dc'],
                ['t', 'T'],
                ['k', 'K'],
                ['m', 'M'],
                ['l', 'L'],
                ['y', 'Y', '\u00b4'],
                ['\u015f', '\u015e'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|', '\u00a6'],
                ['j', 'J', '\u00ab', '<'],
                ['\u00f6', '\u00d6', '\u00bb', '>'],
                ['v', 'V', '\u00a2', '\u00a9'],
                ['c', 'C'],
                ['\u00e7', '\u00c7'],
                ['z', 'Z'],
                ['s', 'S', '\u00b5', '\u00ba'],
                ['b', 'B', '\u00d7'],
                ['.', ':', '\u00f7'],
                [',', ';', '-'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    'T\u00fcrk\u00e7e Q': {
        'name': 'Turkish Q',
        'keys': [
            [
                ['"', '\u00e9', '<'],
                ['1', '!', '>'],
                ['2', '\'', '\u00a3'],
                ['3', '^', '#'],
                ['4', '+', '$'],
                ['5', '%', '\u00bd'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['*', '?', '\\'],
                ['-', '_', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['\u0131', 'I', 'i', '\u0130'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u011f', '\u011e', '\u00a8'],
                ['\u00fc', '\u00dc', '~'],
                [',', ';', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e6', '\u00c6'],
                ['s', 'S', '\u00df'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u015f', '\u015e', '\u00b4'],
                ['i', '\u0130'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                ['\u00f6', '\u00d6'],
                ['\u00e7', '\u00c7'],
                ['.', ':'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['tr']
    },
    '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430': {
        'name': 'Ukrainian',
        'keys': [
            [
                ['\u00b4', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u0457', '\u0407'],
                ['\u0491', '\u0490']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u0456', '\u0406'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u0454', '\u0404'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['uk']
    },
    'United Kingdom': {
        'name': 'United Kingdom',
        'keys': [
            [
                ['`', '\u00ac', '\u00a6'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00a3'],
                ['4', '$', '\u20ac'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00e9', '\u00c9'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U', '\u00fa', '\u00da'],
                ['i', 'I', '\u00ed', '\u00cd'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['#', '~']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e1', '\u00c1'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['en-GB']
    },
    '\u0627\u0631\u062f\u0648': {
        'name': 'Urdu',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '\u066A'],
                ['6', '^'],
                ['7', '\u06D6'],
                ['8', '\u066D'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0637', '\u0638'],
                ['\u0635', '\u0636'],
                ['\u06be', '\u0630'],
                ['\u062f', '\u0688'],
                ['\u0679', '\u062B'],
                ['\u067e', '\u0651'],
                ['\u062a', '\u06C3'],
                ['\u0628', '\u0640'],
                ['\u062c', '\u0686'],
                ['\u062d', '\u062E'],
                [']', '}'],
                ['[', '{'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0645', '\u0698'],
                ['\u0648', '\u0632'],
                ['\u0631', '\u0691'],
                ['\u0646', '\u06BA'],
                ['\u0644', '\u06C2'],
                ['\u06c1', '\u0621'],
                ['\u0627', '\u0622'],
                ['\u06A9', '\u06AF'],
                ['\u06CC', '\u064A'],
                ['\u061b', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0642', '\u200D'],
                ['\u0641', '\u200C'],
                ['\u06D2', '\u06D3'],
                ['\u0633', '\u200E'],
                ['\u0634', '\u0624'],
                ['\u063a', '\u0626'],
                ['\u0639', '\u200F'],
                ['\u060C', '>'],
                ['\u06D4', '<'],
                ['/', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ur']
    },
    '\u0627\u0631\u062f\u0648 Phonetic': {
        'name': 'Urdu Phonetic',
        'keys': [
            [
                ['\u064D', '\u064B', '~'],
                ['\u06F1', '1', '!'],
                ['\u06F2', '2', '@'],
                ['\u06F3', '3', '#'],
                ['\u06F4', '4', '$'],
                ['\u06F5', '5', '\u066A'],
                ['\u06F6', '6', '^'],
                ['\u06F7', '7', '&'],
                ['\u06F8', '8', '*'],
                ['\u06F9', '9', '('],
                ['\u06F0', '0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0642', '\u0652'],
                ['\u0648', '\u0651', '\u0602'],
                ['\u0639', '\u0670', '\u0656'],
                ['\u0631', '\u0691', '\u0613'],
                ['\u062A', '\u0679', '\u0614'],
                ['\u06D2', '\u064E', '\u0601'],
                ['\u0621', '\u0626', '\u0654'],
                ['\u06CC', '\u0650', '\u0611'],
                ['\u06C1', '\u06C3'],
                ['\u067E', '\u064F', '\u0657'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0627', '\u0622', '\uFDF2'],
                ['\u0633', '\u0635', '\u0610'],
                ['\u062F', '\u0688', '\uFDFA'],
                ['\u0641'],
                ['\u06AF', '\u063A'],
                ['\u062D', '\u06BE', '\u0612'],
                ['\u062C', '\u0636', '\uFDFB'],
                ['\u06A9', '\u062E'],
                ['\u0644'],
                ['\u061B', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0632', '\u0630', '\u060F'],
                ['\u0634', '\u0698', '\u060E'],
                ['\u0686', '\u062B', '\u0603'],
                ['\u0637', '\u0638'],
                ['\u0628', '', '\uFDFD'],
                ['\u0646', '\u06BA', '\u0600'],
                ['\u0645', '\u0658'],
                ['\u060C', '', '<'],
                ['\u06D4', '\u066B', '>'],
                ['/', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ]
    },
    'US Standard': {
        'name': 'US Standard',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['en-US']
    },
    'US International': {
        'name': 'US International',
        'keys': [
            [
                ['`', '~'],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u00e4', '\u00c4'],
                ['w', 'W', '\u00e5', '\u00c5'],
                ['e', 'E', '\u00e9', '\u00c9'],
                ['r', 'R', '\u00ae'],
                ['t', 'T', '\u00fe', '\u00de'],
                ['y', 'Y', '\u00fc', '\u00dc'],
                ['u', 'U', '\u00fa', '\u00da'],
                ['i', 'I', '\u00ed', '\u00cd'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P', '\u00f6', '\u00d6'],
                ['[', '{', '\u00ab'],
                [']', '}', '\u00bb'],
                ['\\', '|', '\u00ac', '\u00a6']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e1', '\u00c1'],
                ['s', 'S', '\u00df', '\u00a7'],
                ['d', 'D', '\u00f0', '\u00d0'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u00f8', '\u00d8'],
                [';', ':', '\u00b6', '\u00b0'],
                ['\'', '"', '\u00b4', '\u00a8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u00e6', '\u00c6'],
                ['x', 'X'],
                ['c', 'C', '\u00a9', '\u00a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N', '\u00f1', '\u00d1'],
                ['m', 'M', '\u00b5'],
                [',', '<', '\u00e7', '\u00c7'],
                ['.', '>'],
                ['/', '?', '\u00bf'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['en']
    },
    '\u040e\u0437\u0431\u0435\u043a\u0447\u0430': {
        'name': 'Uzbek Cyrillic',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['\u0493', '\u0492'],
                ['\u04B3', '\u04B2'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u045E', '\u040E'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u049B', '\u049A'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['uz']
    },
    '\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9': {
        'name': 'Yiddish',
        'keys': [
            [
                [';', '~', '\u05B0'],
                ['1', '!', '\u05B1'],
                ['2', '@', '\u05B2'],
                ['3', '#', '\u05B3'],
                ['4', '$', '\u05B4'],
                ['5', '%', '\u05B5'],
                ['6', '^', '\u05B6'],
                ['7', '*', '\u05B7'],
                ['8', '&', '\u05B8'],
                ['9', '(', '\u05C2'],
                ['0', ')', '\u05C1'],
                ['-', '_', '\u05B9'],
                ['=', '+', '\u05BC'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', '\u201F', '\u201F'],
                ['\'', '\u201E', '\u201E'],
                ['\u05E7', '`', '`'],
                ['\u05E8', '\uFB2F', '\uFB2F'],
                ['\u05D0', '\uFB2E', '\uFB2E'],
                ['\u05D8', '\u05F0', '\u05F0'],
                ['\u05D5', '\uFB35', '\uFB35'],
                ['\u05DF', '\uFB4B', '\uFB4B'],
                ['\u05DD', '\uFB4E', '\uFB4E'],
                ['\u05E4', '\uFB44', '\uFB44'],
                ['[', '{', '\u05BD'],
                [']', '}', '\u05BF'],
                ['\\', '|', '\u05BB']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05E9', '\uFB2A', '\uFB2A'],
                ['\u05D3', '\uFB2B', '\uFB2B'],
                ['\u05D2'],
                ['\u05DB', '\uFB3B', '\uFB3B'],
                ['\u05E2', '\u05F1', '\u05F1'],
                ['\u05D9', '\uFB1D', '\uFB1D'],
                ['\u05D7', '\uFF1F', '\uFF1F'],
                ['\u05DC', '\u05F2', '\u05F2'],
                ['\u05DA'],
                ['\u05E3', ':', '\u05C3'],
                [',', '"', '\u05C0'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05D6', '\u2260', '\u2260'],
                ['\u05E1', '\uFB4C', '\uFB4C'],
                ['\u05D1', '\uFB31', '\uFB31'],
                ['\u05D4', '\u05BE', '\u05BE'],
                ['\u05E0', '\u2013', '\u2013'],
                ['\u05DE', '\u2014', '\u2014'],
                ['\u05E6', '\uFB4A', '\uFB4A'],
                ['\u05EA', '<', '\u05F3'],
                ['\u05E5', '>', '\u05F4'],
                ['.', '?', '\u20AA'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['yi']
    },
    '\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05dc\u05e2\u05d1\u05d8': {
        'name': 'Yiddish (Yidish Lebt)',
        'keys': [
            [
                [';', '~'],
                ['1', '!', '\u05B2', '\u05B2'],
                ['2', '@', '\u05B3', '\u05B3'],
                ['3', '#', '\u05B1', '\u05B1'],
                ['4', '$', '\u05B4', '\u05B4'],
                ['5', '%', '\u05B5', '\u05B5'],
                ['6', '^', '\u05B7', '\u05B7'],
                ['7', '&', '\u05B8', '\u05B8'],
                ['8', '*', '\u05BB', '\u05BB'],
                ['9', ')', '\u05B6', '\u05B6'],
                ['0', '(', '\u05B0', '\u05B0'],
                ['-', '_', '\u05BF', '\u05BF'],
                ['=', '+', '\u05B9', '\u05B9'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', '', '\u05F4', '\u05F4'],
                ['\'', '', '\u05F3', '\u05F3'],
                ['\u05E7', '', '\u20AC'],
                ['\u05E8'],
                ['\u05D0', '', '\u05D0\u05B7', '\uFB2E'],
                ['\u05D8', '', '\u05D0\u05B8', '\uFB2F'],
                ['\u05D5', '\u05D5\u05B9', '\u05D5\u05BC', '\uFB35'],
                ['\u05DF', '', '\u05D5\u05D5', '\u05F0'],
                ['\u05DD', '', '\u05BC'],
                ['\u05E4', '', '\u05E4\u05BC', '\uFB44'],
                [']', '}', '\u201E', '\u201D'],
                ['[', '{', '\u201A', '\u2019'],
                ['\\', '|', '\u05BE', '\u05BE']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05E9', '\u05E9\u05C1', '\u05E9\u05C2', '\uFB2B'],
                ['\u05D3', '', '\u20AA'],
                ['\u05D2', '\u201E'],
                ['\u05DB', '', '\u05DB\u05BC', '\uFB3B'],
                ['\u05E2', '', '', '\uFB20'],
                ['\u05D9', '', '\u05D9\u05B4', '\uFB1D'],
                ['\u05D7', '', '\u05F2\u05B7', '\uFB1F'],
                ['\u05DC', '\u05DC\u05B9', '\u05D5\u05D9', '\u05F1'],
                ['\u05DA', '', '', '\u05F2'],
                ['\u05E3', ':', '\u05E4\u05BF', '\uFB4E'],
                [',', '"', ';', '\u05B2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05D6', '', '\u2013', '\u2013'],
                ['\u05E1', '', '\u2014', '\u2014'],
                ['\u05D1', '\u05DC\u05B9', '\u05D1\u05BF', '\uFB4C'],
                ['\u05D4', '', '\u201D', '\u201C'],
                ['\u05E0', '', '\u059C', '\u059E'],
                ['\u05DE', '', '\u2019', '\u2018'],
                ['\u05E6', '', '\u05E9\u05C1', '\uFB2A'],
                ['\u05EA', '>', '\u05EA\u05BC', '\uFB4A'],
                ['\u05E5', '<'],
                ['.', '?', '\u2026'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['yi']
    },
    '\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7': {
        'name': 'Chinese Bopomofo IME',
        'keys': [
            [
                ['\u20AC', '~'],
                ['\u3105', '!'],
                ['\u3109', '@'],
                ['\u02C7', '#'],
                ['\u02CB', '$'],
                ['\u3113', '%'],
                ['\u02CA', '^'],
                ['\u02D9', '&'],
                ['\u311A', '*'],
                ['\u311E', ')'],
                ['\u3122', '('],
                ['\u3126', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u3106', 'q'],
                ['\u310A', 'w'],
                ['\u310D', 'e'],
                ['\u3110', 'r'],
                ['\u3114', 't'],
                ['\u3117', 'y'],
                ['\u3127', 'u'],
                ['\u311B', 'i'],
                ['\u311F', 'o'],
                ['\u3123', 'p'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u3107', 'a'],
                ['\u310B', 's'],
                ['\u310E', 'd'],
                ['\u3111', 'f'],
                ['\u3115', 'g'],
                ['\u3118', 'h'],
                ['\u3128', 'j'],
                ['\u311C', 'k'],
                ['\u3120', 'l'],
                ['\u3124', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u3108', 'z'],
                ['\u310C', 'x'],
                ['\u310F', 'c'],
                ['\u3112', 'v'],
                ['\u3116', 'b'],
                ['\u3119', 'n'],
                ['\u3129', 'm'],
                ['\u311D', '<'],
                ['\u3121', '>'],
                ['\u3125', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['zh-BOPO']
    },
    '\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5': {
        'name': 'Chinese Cangjie IME',
        'keys': [
            [
                ['\u20AC', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u624B', 'q'],
                ['\u7530', 'w'],
                ['\u6C34', 'e'],
                ['\u53E3', 'r'],
                ['\u5EFF', 't'],
                ['\u535C', 'y'],
                ['\u5C71', 'u'],
                ['\u6208', 'i'],
                ['\u4EBA', 'o'],
                ['\u5FC3', 'p'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u65E5', 'a'],
                ['\u5C38', 's'],
                ['\u6728', 'd'],
                ['\u706B', 'f'],
                ['\u571F', 'g'],
                ['\u7AF9', 'h'],
                ['\u5341', 'j'],
                ['\u5927', 'k'],
                ['\u4E2D', 'l'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\uFF3A', 'z'],
                ['\u96E3', 'x'],
                ['\u91D1', 'c'],
                ['\u5973', 'v'],
                ['\u6708', 'b'],
                ['\u5F13', 'n'],
                ['\u4E00', 'm'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['zh']
    }
};
// aliases
keyboardLayouts['Hrvatski'] = {
    'name': 'Croatian',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['hr']
};
keyboardLayouts['Sloven\u0161\u010dina'] = {
    'name': 'Slovenian',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['sl']
};
keyboardLayouts['Srpski'] = {
    'name': 'Serbian Latin',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['sr']
};
export { keyboardLayouts, MAT_KEYBOARD_LAYOUTS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtbGF5b3V0cy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9zcmMvY29uZmlncy9rZXlib2FyZC1sYXlvdXRzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9HRztBQUNILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHcEUsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FBbUIseUJBQXlCLENBQUMsQ0FBQztBQUM3RixNQUFNLGVBQWUsR0FBcUI7SUFDeEMsNENBQTRDLEVBQUU7UUFDNUMsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO2dCQUNyQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxF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Q0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFR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eEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2FBQzFCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxD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QztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtB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LElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUNyQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQzthQUN6QztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUs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LEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2FBQ1o7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO0tBQ0Y7SUFDRCxrREFBa0QsRUFBRTtRQUNsRCxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDdEI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxJ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LEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ2hDO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUs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QVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUNyQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQ2pCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMs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QUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2FBQ2hCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNuQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUNYO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDMUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FB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USxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUss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QztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2hCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDaEI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNyQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQzthQUNyQjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENB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RSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFF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LENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNE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QUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxH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QUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUs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QyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcs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QUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3JCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JB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QUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsQ0FBQztnQkFDTCxDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxlQUFlLEVBQUU7UUFDZixNQUFNLEVBQUUsZUFBZTtRQUN2QixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3pDO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQzthQUN6QztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFB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LENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVB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Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxF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R0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDdEI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUN6RjtTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO0tBQ3BCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFLGNBQWM7UUFDdEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNyQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUNoQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3JCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FB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LENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JB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QUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FB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Q0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFB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RUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDckI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENB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LENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0Qsc0NBQXNDLEVBQUU7UUFDdEMsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQzthQUNyQjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixD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QztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFB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SUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztn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QVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2FBQ2hCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtB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QUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7YUFDdkI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUN0QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxL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RSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO2dCQUMxQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxD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QUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDWDtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztLQUNsQjtJQUNELDBCQUEwQixFQUFFO1FBQzFCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFD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QUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztLQUNsQjtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ2hDO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDL0IsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFH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Z0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxD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QUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6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QUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0NBQ0YsQ0FBQztBQUVGLFVBQVU7QUFDVixlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUc7SUFDNUIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDZixDQUFDO0FBRUYsZUFBZSxDQUFDLHVCQUF1QixDQUFDLEdBQUc7SUFDekMsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDZixDQUFDO0FBRUYsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0lBQzFCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ2YsQ0FBQztBQUVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSRUFETUUgZnJvbSBodHRwOi8vd3d3LmdyZXl3eXZlcm4uY29tL2NvZGUvamF2YXNjcmlwdC9rZXlib2FyZC5qc1xuICogLS0tLS0tXG4gKlxuICogLSBMYXkgb3V0IGVhY2gga2V5Ym9hcmQgaW4gcm93cyBvZiBzdWItYXJyYXlzLiAgRWFjaCBzdWItYXJyYXlcbiAqICAgcmVwcmVzZW50cyBvbmUga2V5LlxuICpcbiAqIC0gRWFjaCBzdWItYXJyYXkgY29uc2lzdHMgb2YgZm91ciBzbG90cyBkZXNjcmliZWQgYXMgZm9sbG93czpcbiAqICAgICBleGFtcGxlOiBbXCJhXCIsIFwiQVwiLCBcIlxcdTAwZTFcIiwgXCJcXHUwMGMxXCJdXG4gKlxuICogICAgICAgICAgYSkgTm9ybWFsIGNoYXJhY3RlclxuICogICAgICAgICAgQSkgQ2hhcmFjdGVyICsgU2hpZnQvQ2Fwc1xuICogICAgIFxcdTAwZTEpIENoYXJhY3RlciArIEFsdC9BbHRHci9BbHRMa1xuICogICAgIFxcdTAwYzEpIENoYXJhY3RlciArIFNoaWZ0L0NhcHMgKyBBbHQvQWx0R3IvQWx0TGtcbiAqXG4gKiAgIFlvdSBtYXkgaW5jbHVkZSBzdWItYXJyYXlzIHdoaWNoIGFyZSBmZXdlciB0aGFuIGZvdXIgc2xvdHMuXG4gKiAgIEluIHRoZXNlIGNhc2VzLCB0aGUgbWlzc2luZyBzbG90cyB3aWxsIGJlIGJsYW5rZWQgd2hlbiB0aGVcbiAqICAgY29ycmVzcG9uZGluZyBtb2RpZmllciBrZXkgKFNoaWZ0IG9yIEFsdEdyKSBpcyBwcmVzc2VkLlxuICpcbiAqIC0gSWYgdGhlIHNlY29uZCBzbG90IG9mIGEgc3ViLWFycmF5IG1hdGNoZXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAqICAgc3RyaW5nczpcbiAqICAgICBcIlRhYlwiLCBcIkNhcHNcIiwgXCJTaGlmdFwiLCBcIkVudGVyXCIsIFwiQmtzcFwiLFxuICogICAgIFwiQWx0XCIgT1IgXCJBbHRHclwiLCBcIkFsdExrXCJcbiAqICAgdGhlbiB0aGUgZnVuY3Rpb24gb2YgdGhlIGtleSB3aWxsIGJlIHRoZSBmb2xsb3dpbmcsXG4gKiAgIHJlc3BlY3RpdmVseTpcbiAqICAgICAtIEluc2VydCBhIHRhYlxuICogICAgIC0gVG9nZ2xlIENhcHMgTG9jayAodGVjaG5pY2FsbHkgYSBTaGlmdCBMb2NrKVxuICogICAgIC0gTmV4dCBlbnRlcmVkIGNoYXJhY3RlciB3aWxsIGJlIHRoZSBzaGlmdGVkIGNoYXJhY3RlclxuICogICAgIC0gSW5zZXJ0IGEgbmV3bGluZSAodGV4dGFyZWEpLCBvciBjbG9zZSB0aGUga2V5Ym9hcmRcbiAqICAgICAtIERlbGV0ZSB0aGUgcHJldmlvdXMgY2hhcmFjdGVyXG4gKiAgICAgLSBOZXh0IGVudGVyZWQgY2hhcmFjdGVyIHdpbGwgYmUgdGhlIGFsdGVybmF0ZSBjaGFyYWN0ZXJcbiAqICAgICAtIFRvZ2dsZSBBbHQvQWx0R3IgTG9ja1xuICpcbiAqICAgVGhlIGZpcnN0IHNsb3Qgb2YgdGhpcyBzdWItYXJyYXkgd2lsbCBiZSB0aGUgdGV4dCB0byBkaXNwbGF5XG4gKiAgIG9uIHRoZSBjb3JyZXNwb25kaW5nIGtleS4gIFRoaXMgYWxsb3dzIGZvciBlYXN5IGxvY2FsaXNhdGlvblxuICogICBvZiBrZXkgbmFtZXMuXG4gKlxuICogLSBMYXlvdXQgZGVhZCBrZXlzIChkaWFjcml0aWMgKyBsZXR0ZXIpIHNob3VsZCBiZSBhZGRlZCBhc1xuICogICBwcm9wZXJ0eS92YWx1ZSBwYWlycyBvZiBvYmplY3RzIHdpdGggaGFzaCBrZXlzIGVxdWFsIHRvIHRoZVxuICogICBkaWFjcml0aWMuICBTZWUgdGhlIFwidGhpcy5WS0lfZGVhZGtleVwiIG9iamVjdCBiZWxvdyB0aGUgbGF5b3V0XG4gKiAgIGRlZmluaXRpb25zLiAgSW4gZWFjaCBwcm9wZXJ0eS92YWx1ZSBwYWlyLCB0aGUgdmFsdWUgaXMgd2hhdFxuICogICB0aGUgZGlhY3JpdGljIHdvdWxkIGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSB0by5cbiAqXG4gKiAtIE5vdGUgdGhhdCBhbnkgY2hhcmFjdGVycyBiZXlvbmQgdGhlIG5vcm1hbCBBU0NJSSBzZXQgc2hvdWxkIGJlXG4gKiAgIGVudGVyZWQgaW4gZXNjYXBlZCBVbmljb2RlIGZvcm1hdC4gIChlZyBcXHUwMGEzID0gUG91bmQgc3ltYm9sKVxuICogICBZb3UgY2FuIGZpbmQgVW5pY29kZSB2YWx1ZXMgZm9yIGNoYXJhY3RlcnMgaGVyZTpcbiAqICAgICBodHRwOi8vdW5pY29kZS5vcmcvY2hhcnRzL1xuICpcbiAqIC0gVG8gcmVtb3ZlIGEga2V5Ym9hcmQsIGp1c3QgZGVsZXRlIGl0LCBvciBjb21tZW50IGl0IG91dCBvZiB0aGVcbiAqICAgc291cmNlIGNvZGUuIElmIHlvdSBkZWNpZGUgdG8gcmVtb3ZlIHRoZSBVUyBJbnRlcm5hdGlvbmFsXG4gKiAgIGtleWJvYXJkIGxheW91dCwgbWFrZSBzdXJlIHlvdSBjaGFuZ2UgdGhlIGRlZmF1bHQgbGF5b3V0XG4gKiAgICh0aGlzLlZLSV9rdCkgYWJvdmUgc28gaXQgcmVmZXJlbmNlcyBhbiBleGlzdGluZyBsYXlvdXQuXG4gKlxuICogQ1JFRElUU1xuICogLS0tLS0tLVxuICpcbiAqIFNlZSBodHRwOi8vd3d3LmdyZXl3eXZlcm4uY29tL2NvZGUvamF2YXNjcmlwdC9rZXlib2FyZCBmb3IgZXhhbXBsZXNcbiAqIGFuZCB1c2FnZSBpbnN0cnVjdGlvbnMuXG4gKlxuICogVmVyc2lvbiAxLjQ5IC0gTm92ZW1iZXIgOCwgMjAxMVxuICogICAtIERvbid0IGRpc3BsYXkgbGFuZ3VhZ2UgZHJvcC1kb3duIGlmIG9ubHkgb25lIGtleWJvYXJkIGF2YWlsYWJsZVxuICpcbiAqICAgU2VlIGZ1bGwgY2hhbmdlbG9nIGF0OlxuICogICAgIGh0dHA6Ly93d3cuZ3JleXd5dmVybi5jb20vY29kZS9qYXZhc2NyaXB0L2tleWJvYXJkLmNoYW5nZWxvZy50eHRcbiAqXG4gKiBLZXlib2FyZCBDcmVkaXRzXG4gKiAgIC0gWWlkZGlzaCAoWWlkaXNoIExlYnQpIGtleWJvYXJkIGxheW91dCBieSBTaW1jaGUgVGF1YiAoamlkeXN6Lm5ldClcbiAqICAgLSBVcmR1IFBob25ldGljIGtleWJvYXJkIGxheW91dCBieSBLaGFsaWQgTWFsaWtcbiAqICAgLSBZaWRkaXNoIGtleWJvYXJkIGxheW91dCBieSBIZWxtdXQgV29sbG1lcnNkb3JmZXJcbiAqICAgLSBLaG1lciBrZXlib2FyZCBsYXlvdXQgYnkgU292YW5uIEhlbmcgKGttLWtoLmNvbSlcbiAqICAgLSBEYXJpIGtleWJvYXJkIGxheW91dCBieSBTYWlmIEZhemVsXG4gKiAgIC0gS3VyZGlzaCBrZXlib2FyZCBsYXlvdXQgYnkgQXJhIFFhZGlyXG4gKiAgIC0gQXNzYW1lc2Uga2V5Ym9hcmQgbGF5b3V0IGJ5IEthbmNoYW4gR29nb2lcbiAqICAgLSBCdWxnYXJpYW4gQkRTIGtleWJvYXJkIGxheW91dCBieSBNaWxlbiBHZW9yZ2lldlxuICogICAtIEJhc2ljIEphcGFuZXNlIEhpcmFnYW5hL0thdGFrYW5hIGtleWJvYXJkIGxheW91dCBieSBEYW1qYW5cbiAqICAgLSBVa3JhaW5pYW4ga2V5Ym9hcmQgbGF5b3V0IGJ5IERtaXRyeSBOaWtpdGluXG4gKiAgIC0gTWFjZWRvbmlhbiBrZXlib2FyZCBsYXlvdXQgYnkgRGFtamFuIERpbWl0cmlvc2tpXG4gKiAgIC0gUGFzaHRvIGtleWJvYXJkIGxheW91dCBieSBBaG1hZCBXYWxpIEFjaGFremFpIChxYW1vc29uYS5jb20pXG4gKiAgIC0gQXJtZW5pYW4gRWFzdGVybiBhbmQgV2VzdGVybiBrZXlib2FyZCBsYXlvdXRzIGJ5IEhheWFzdGFuIFByb2plY3QgKHd3dy5oYXlhc3Rhbi5jby51aylcbiAqICAgLSBQaW55aW4ga2V5Ym9hcmQgbGF5b3V0IGZyb20gYSBjb2xsYWJvcmF0aW9uIHdpdGggTG91IFdpbmtsZW1hbm5cbiAqICAgLSBLYXpha2gga2V5Ym9hcmQgbGF5b3V0IGJ5IEFsZXggTWFkeWFua2luXG4gKiAgIC0gRGFuaXNoIGtleWJvYXJkIGxheW91dCBieSBWZXJuZXIgS2rDg8KmcnNnYWFyZFxuICogICAtIFNsb3ZhayBrZXlib2FyZCBsYXlvdXQgYnkgRGFuaWVsIExhcmEgKHd3dy5sZWFybmluZ3Nsb3Zhay5jb20pXG4gKiAgIC0gQmVsYXJ1c2lhbiBhbmQgU2VyYmlhbiBDeXJpbGxpYyBrZXlib2FyZCBsYXlvdXRzIGJ5IEV2Z2VuaXkgVGl0b3ZcbiAqICAgLSBCdWxnYXJpYW4gUGhvbmV0aWMga2V5Ym9hcmQgbGF5b3V0IGJ5IFNhbXVpbCBHb3Nwb2Rpbm92XG4gKiAgIC0gU3dlZGlzaCBrZXlib2FyZCBsYXlvdXQgYnkgSMODwqVrYW4gU2FuZGJlcmdcbiAqICAgLSBSb21hbmlhbiBrZXlib2FyZCBsYXlvdXQgYnkgQXVyZWxcbiAqICAgLSBGYXJzaSAoUGVyc2lhbikga2V5Ym9hcmQgbGF5b3V0IGJ5IEthdmVoIEJha2h0aXlhcmkgKHd3dy5iYWtodGl5YXJpLmNvbSlcbiAqICAgLSBCdXJtZXNlIGtleWJvYXJkIGxheW91dCBieSBDZXRhbmFwYVxuICogICAtIEJvc25pYW4vQ3JvYXRpYW4vU2VyYmlhbiBMYXRpbi9TbG92ZW5pYW4ga2V5Ym9hcmQgbGF5b3V0IGJ5IE1pcmFuIFplbGprb1xuICogICAtIEh1bmdhcmlhbiBrZXlib2FyZCBsYXlvdXQgYnkgQW50YWwgU2FsbCAnSGlyb21hY3UnXG4gKiAgIC0gQXJhYmljIGtleWJvYXJkIGxheW91dCBieSBTcmluaXZhcyBSZWRkeVxuICogICAtIEl0YWxpYW4gYW5kIFNwYW5pc2ggKFNwYWluKSBrZXlib2FyZCBsYXlvdXRzIGJ5IGRpY3Rpb25hcmlzdC5jb21cbiAqICAgLSBMaXRodWFuaWFuIGFuZCBSdXNzaWFuIGtleWJvYXJkIGxheW91dHMgYnkgUmFtdW5hc1xuICogICAtIEdlcm1hbiBrZXlib2FyZCBsYXlvdXQgYnkgUXVIbm9cbiAqICAgLSBGcmVuY2gga2V5Ym9hcmQgbGF5b3V0IGJ5IEhpZGRlbiBFdmlsXG4gKiAgIC0gUG9saXNoIFByb2dyYW1tZXJzIGxheW91dCBieSBtb29zZVxuICogICAtIFR1cmtpc2gga2V5Ym9hcmQgbGF5b3V0cyBieSBvZmZjdVxuICogICAtIER1dGNoIGFuZCBVUyBJbnQnbCBrZXlib2FyZCBsYXlvdXRzIGJ5IGplcm9uZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtleWJvYXJkQ2xhc3NLZXkgfSBmcm9tICcuLi9lbnVtcy9rZXlib2FyZC1jbGFzcy1rZXkuZW51bSc7XG5pbXBvcnQgeyBJS2V5Ym9hcmRMYXlvdXRzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1sYXlvdXRzLmludGVyZmFjZSc7XG5cbmNvbnN0IE1BVF9LRVlCT0FSRF9MQVlPVVRTID0gbmV3IEluamVjdGlvblRva2VuPElLZXlib2FyZExheW91dHM+KCdrZXlib2FyZC1sYXlvdXRzLmNvbmZpZycpO1xuY29uc3Qga2V5Ym9hcmRMYXlvdXRzOiBJS2V5Ym9hcmRMYXlvdXRzID0ge1xuICAnXFx1MDYyN1xcdTA2NDRcXHUwNjM5XFx1MDYzMVxcdTA2MjhcXHUwNjRhXFx1MDYyOSc6IHtcbiAgICAnbmFtZSc6ICdBcmFiaWMnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTA2MzAnLCAnXFx1MDY1MSAnXSxcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBhMScsICdcXHUwMGI5J10sXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTAwYjInXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGE0JywgJ1xcdTAwYTMnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMGJjJ10sXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTAwYmQnXSxcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBiZSddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUyMDE4J10sXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTIwMTknXSxcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBhNSddLFxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMGQ3JywgJ1xcdTAwZjcnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDYzNicsICdcXHUwNjRlJ10sXG4gICAgICAgIFsnXFx1MDYzNScsICdcXHUwNjRiJ10sXG4gICAgICAgIFsnXFx1MDYyYicsICdcXHUwNjRmJ10sXG4gICAgICAgIFsnXFx1MDY0MicsICdcXHUwNjRjJ10sXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjQ0J10sXG4gICAgICAgIFsnXFx1MDYzYScsICdcXHUwNjI1J10sXG4gICAgICAgIFsnXFx1MDYzOScsICdcXHUyMDE4J10sXG4gICAgICAgIFsnXFx1MDY0NycsICdcXHUwMGY3J10sXG4gICAgICAgIFsnXFx1MDYyZScsICdcXHUwMGQ3J10sXG4gICAgICAgIFsnXFx1MDYyZCcsICdcXHUwNjFiJ10sXG4gICAgICAgIFsnXFx1MDYyYycsICc8J10sXG4gICAgICAgIFsnXFx1MDYyZicsICc+J10sXG4gICAgICAgIFsnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA2MzQnLCAnXFx1MDY1MCddLFxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDY0ZCddLFxuICAgICAgICBbJ1xcdTA2NGEnLCAnXSddLFxuICAgICAgICBbJ1xcdTA2MjgnLCAnWyddLFxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDY0NCddLFxuICAgICAgICBbJ1xcdTA2MjcnLCAnXFx1MDYyMyddLFxuICAgICAgICBbJ1xcdTA2MmEnLCAnXFx1MDY0MCddLFxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDYwYyddLFxuICAgICAgICBbJ1xcdTA2NDUnLCAnLyddLFxuICAgICAgICBbJ1xcdTA2NDMnLCAnOiddLFxuICAgICAgICBbJ1xcdTA2MzcnLCAnXCInXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDYyNicsICd+J10sXG4gICAgICAgIFsnXFx1MDYyMScsICdcXHUwNjUyJ10sXG4gICAgICAgIFsnXFx1MDYyNCcsICd9J10sXG4gICAgICAgIFsnXFx1MDYzMScsICd7J10sXG4gICAgICAgIFsnXFx1MDY0NCcsICdcXHUwNjQ0J10sXG4gICAgICAgIFsnXFx1MDY0OScsICdcXHUwNjIyJ10sXG4gICAgICAgIFsnXFx1MDYyOScsICdcXHUyMDE5J10sXG4gICAgICAgIFsnXFx1MDY0OCcsICcsJ10sXG4gICAgICAgIFsnXFx1MDYzMicsICcuJ10sXG4gICAgICAgIFsnXFx1MDYzOCcsICdcXHUwNjFmJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnYXInXVxuICB9LFxuICAnXFx1MDk4NVxcdTA5YjhcXHUwOWFlXFx1MDljMFxcdTA5ZGZcXHUwOWJlJzoge1xuICAgICduYW1lJzogJ0Fzc2FtZXNlJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWycrJywgJz8nXSxcbiAgICAgICAgWydcXHUwOUU3JywgJ3snLCAnXFx1MDlFNyddLFxuICAgICAgICBbJ1xcdTA5RTgnLCAnfScsICdcXHUwOUU4J10sXG4gICAgICAgIFsnXFx1MDlFOScsICdcXHUwOUNEXFx1MDlGMCcsICdcXHUwOUU5J10sXG4gICAgICAgIFsnXFx1MDlFQScsICdcXHUwOUYwXFx1MDlDRCcsICdcXHUwOUVBJ10sXG4gICAgICAgIFsnXFx1MDlFQicsICdcXHUwOTlDXFx1MDlDRFxcdTA5RjAnLCAnXFx1MDlFQiddLFxuICAgICAgICBbJ1xcdTA5RUMnLCAnXFx1MDk5NVxcdTA5Q0RcXHUwOUI3JywgJ1xcdTA5RUMnXSxcbiAgICAgICAgWydcXHUwOUVEJywgJ1xcdTA5OTVcXHUwOUNEXFx1MDlGMCcsICdcXHUwOUVEJ10sXG4gICAgICAgIFsnXFx1MDlFRScsICdcXHUwOUI2XFx1MDlDRFxcdTA5RjAnLCAnXFx1MDlFRSddLFxuICAgICAgICBbJ1xcdTA5RUYnLCAnKCcsICdcXHUwOUVGJ10sXG4gICAgICAgIFsnXFx1MDlFNicsICcpJywgJ1xcdTA5RTYnXSxcbiAgICAgICAgWyctJywgJyddLFxuICAgICAgICBbJ1xcdTA5QzMnLCAnXFx1MDk4QicsICdcXHUwOUUyJywgJ1xcdTA5RTAnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDlDQycsICdcXHUwOTk0JywgJ1xcdTA5RDcnXSxcbiAgICAgICAgWydcXHUwOUM4JywgJ1xcdTA5OTAnXSxcbiAgICAgICAgWydcXHUwOUJFJywgJ1xcdTA5ODYnXSxcbiAgICAgICAgWydcXHUwOUMwJywgJ1xcdTA5ODgnLCAnXFx1MDlFMycsICdcXHUwOUUxJ10sXG4gICAgICAgIFsnXFx1MDlDMicsICdcXHUwOThBJ10sXG4gICAgICAgIFsnXFx1MDlGMScsICdcXHUwOUFEJ10sXG4gICAgICAgIFsnXFx1MDlCOScsICdcXHUwOTk5J10sXG4gICAgICAgIFsnXFx1MDk5NycsICdcXHUwOTk4J10sXG4gICAgICAgIFsnXFx1MDlBNicsICdcXHUwOUE3J10sXG4gICAgICAgIFsnXFx1MDk5QycsICdcXHUwOTlEJ10sXG4gICAgICAgIFsnXFx1MDlBMScsICdcXHUwOUEyJywgJ1xcdTA5REMnLCAnXFx1MDlERCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA5Q0InLCAnXFx1MDk5MycsICdcXHUwOUY0JywgJ1xcdTA5RjUnXSxcbiAgICAgICAgWydcXHUwOUM3JywgJ1xcdTA5OEYnLCAnXFx1MDlGNicsICdcXHUwOUY3J10sXG4gICAgICAgIFsnXFx1MDlDRCcsICdcXHUwOTg1JywgJ1xcdTA5RjgnLCAnXFx1MDlGOSddLFxuICAgICAgICBbJ1xcdTA5QkYnLCAnXFx1MDk4NycsICdcXHUwOUUyJywgJ1xcdTA5OEMnXSxcbiAgICAgICAgWydcXHUwOUMxJywgJ1xcdTA5ODknXSxcbiAgICAgICAgWydcXHUwOUFBJywgJ1xcdTA5QUInXSxcbiAgICAgICAgWydcXHUwOUYwJywgJycsICdcXHUwOUYwJywgJ1xcdTA5RjEnXSxcbiAgICAgICAgWydcXHUwOTk1JywgJ1xcdTA5OTYnXSxcbiAgICAgICAgWydcXHUwOUE0JywgJ1xcdTA5QTUnXSxcbiAgICAgICAgWydcXHUwOTlBJywgJ1xcdTA5OUInXSxcbiAgICAgICAgWydcXHUwOTlGJywgJ1xcdTA5QTAnXSxcbiAgICAgICAgWydcXHUwOUJDJywgJ1xcdTA5OUUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTA5Q0UnLCAnXFx1MDk4MyddLFxuICAgICAgICBbJ1xcdTA5ODInLCAnXFx1MDk4MScsICdcXHUwOUZBJ10sXG4gICAgICAgIFsnXFx1MDlBRScsICdcXHUwOUEzJ10sXG4gICAgICAgIFsnXFx1MDlBOCcsICdcXHUwOUY3J10sXG4gICAgICAgIFsnXFx1MDlBQycsICdcIiddLFxuICAgICAgICBbJ1xcdTA5QjInLCAnXFwnJ10sXG4gICAgICAgIFsnXFx1MDlCOCcsICdcXHUwOUI2J10sXG4gICAgICAgIFsnLCcsICdcXHUwOUI3J10sXG4gICAgICAgIFsnLicsICc7J10sXG4gICAgICAgIFsnXFx1MDlBRicsICdcXHUwOURGJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydhcyddXG4gIH0sXG4gICdcXHUwNDEwXFx1MDQzN1xcdTA0ZDlcXHUwNDQwXFx1MDQzMVxcdTA0MzBcXHUwNDU4XFx1MDRiOVxcdTA0MzBcXHUwNDNkXFx1MDRiOVxcdTA0MzAnOiB7XG4gICAgJ25hbWUnOiAnQXplcmJhaWphbmkgQ3lyaWxsaWMnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ2AnLCAnfiddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInXSxcbiAgICAgICAgWyczJywgJ1xcdTIxMTYnXSxcbiAgICAgICAgWyc0JywgJzsnXSxcbiAgICAgICAgWyc1JywgJyUnXSxcbiAgICAgICAgWyc2JywgJzonXSxcbiAgICAgICAgWyc3JywgJz8nXSxcbiAgICAgICAgWyc4JywgJyonXSxcbiAgICAgICAgWyc5JywgJygnXSxcbiAgICAgICAgWycwJywgJyknXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgWyc9JywgJysnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDQ1OCcsICdcXHUwNDA4J10sXG4gICAgICAgIFsnXFx1MDRBRicsICdcXHUwNEFFJ10sXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXG4gICAgICAgIFsnXFx1MDRCQicsICdcXHUwNEJBJ10sXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXG4gICAgICAgIFsnXFx1MDRCOScsICdcXHUwNEI4J10sXG4gICAgICAgIFsnXFxcXCcsICcvJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxuICAgICAgICBbJ1xcdTA0NEInLCAnXFx1MDQyQiddLFxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxuICAgICAgICBbJ1xcdTA0M0UnLCAnXFx1MDQxRSddLFxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxuICAgICAgICBbJ1xcdTA0OUQnLCAnXFx1MDQ5QyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcbiAgICAgICAgWydcXHUwNEQ5JywgJ1xcdTA0RDgnXSxcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcbiAgICAgICAgWydcXHUwNDkzJywgJ1xcdTA0OTInXSxcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcbiAgICAgICAgWydcXHUwNEU5JywgJ1xcdTA0RTgnXSxcbiAgICAgICAgWycuJywgJywnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydhei1DWVJMJ11cbiAgfSxcbiAgJ0F6XFx1MDI1OXJiYXljYW5jYSc6IHtcbiAgICAnbmFtZSc6ICdBemVyYmFpamFuaSBMYXRpbicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICd+J10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdcIiddLFxuICAgICAgICBbJzMnLCAnXFx1MjE2NiddLFxuICAgICAgICBbJzQnLCAnOyddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnOiddLFxuICAgICAgICBbJzcnLCAnPyddLFxuICAgICAgICBbJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCddLFxuICAgICAgICBbJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWydcXHUwMEZDJywgJ1xcdTAwREMnXSxcbiAgICAgICAgWydlJywgJ0UnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ1xcdTAxMzAnXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMEY2JywgJ1xcdTAwRDYnXSxcbiAgICAgICAgWydcXHUwMTFGJywgJ1xcdTAxMUUnXSxcbiAgICAgICAgWydcXFxcJywgJy8nXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnXFx1MDEzMScsICdJJ10sXG4gICAgICAgIFsnXFx1MDI1OScsICdcXHUwMThGJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJ1xcdTAwRTcnLCAnXFx1MDBDNyddLFxuICAgICAgICBbJ1xcdTAxNUYnLCAnXFx1MDE1RSddLFxuICAgICAgICBbJy4nLCAnLCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2F6J11cbiAgfSxcbiAgJ1xcdTA0MTFcXHUwNDM1XFx1MDQzYlxcdTA0MzBcXHUwNDQwXFx1MDQ0M1xcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYnOiB7XG4gICAgJ25hbWUnOiAnQmVsYXJ1c2lhbicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDQ1MScsICdcXHUwNDAxJ10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdcIiddLFxuICAgICAgICBbJzMnLCAnXFx1MjExNiddLFxuICAgICAgICBbJzQnLCAnOyddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnOiddLFxuICAgICAgICBbJzcnLCAnPyddLFxuICAgICAgICBbJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCddLFxuICAgICAgICBbJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcbiAgICAgICAgWydcXHUwNDNhJywgJ1xcdTA0MWEnXSxcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcbiAgICAgICAgWydcXHUwNDNkJywgJ1xcdTA0MWQnXSxcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcbiAgICAgICAgWydcXHUwNDVlJywgJ1xcdTA0MGUnXSxcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcbiAgICAgICAgWydcXCcnLCAnXFwnJ10sXG4gICAgICAgIFsnXFxcXCcsICcvJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxuICAgICAgICBbJ1xcdTA0NGInLCAnXFx1MDQyYiddLFxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxuICAgICAgICBbJ1xcdTA0M2YnLCAnXFx1MDQxZiddLFxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxuICAgICAgICBbJ1xcdTA0M2UnLCAnXFx1MDQxZSddLFxuICAgICAgICBbJ1xcdTA0M2InLCAnXFx1MDQxYiddLFxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxuICAgICAgICBbJ1xcdTA0NGQnLCAnXFx1MDQyZCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWycvJywgJ3wnXSxcbiAgICAgICAgWydcXHUwNDRmJywgJ1xcdTA0MmYnXSxcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcbiAgICAgICAgWydcXHUwNDNjJywgJ1xcdTA0MWMnXSxcbiAgICAgICAgWydcXHUwNDU2JywgJ1xcdTA0MDYnXSxcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcbiAgICAgICAgWydcXHUwNDRjJywgJ1xcdTA0MmMnXSxcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcbiAgICAgICAgWydcXHUwNDRlJywgJ1xcdTA0MmUnXSxcbiAgICAgICAgWycuJywgJywnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydiZSddXG4gIH0sXG4gICdCZWxnaXNjaGUgLyBCZWxnZSc6IHtcbiAgICAnbmFtZSc6ICdCZWxnaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwMGIyJywgJ1xcdTAwYjMnXSxcbiAgICAgICAgWycmJywgJzEnLCAnfCddLFxuICAgICAgICBbJ1xcdTAwZTknLCAnMicsICdAJ10sXG4gICAgICAgIFsnXCInLCAnMycsICcjJ10sXG4gICAgICAgIFsnXFwnJywgJzQnXSxcbiAgICAgICAgWycoJywgJzUnXSxcbiAgICAgICAgWydcXHUwMGE3JywgJzYnLCAnXiddLFxuICAgICAgICBbJ1xcdTAwZTgnLCAnNyddLFxuICAgICAgICBbJyEnLCAnOCddLFxuICAgICAgICBbJ1xcdTAwZTcnLCAnOScsICd7J10sXG4gICAgICAgIFsnXFx1MDBlMCcsICcwJywgJ30nXSxcbiAgICAgICAgWycpJywgJ1xcdTAwYjAnXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydeJywgJ1xcdTAwYTgnLCAnWyddLFxuICAgICAgICBbJyQnLCAnKicsICddJ10sXG4gICAgICAgIFsnXFx1MDNiYycsICdcXHUwMGEzJywgJ2AnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnXFx1MDBmOScsICclJywgJ1xcdTAwYjQnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+JywgJ1xcXFwnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWyd4JywgJ1gnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWycsJywgJz8nXSxcbiAgICAgICAgWyc7JywgJy4nXSxcbiAgICAgICAgWyc6JywgJy8nXSxcbiAgICAgICAgWyc9JywgJysnLCAnfiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnbmwtQkUnLCAnZnItQkUnXVxuICB9LFxuICAnXFx1MDQxMVxcdTA0NGFcXHUwNDNiXFx1MDQzM1xcdTA0MzBcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4IFxcdTA0MjRcXHUwNDNlXFx1MDQzZFxcdTA0MzVcXHUwNDQyXFx1MDQzOFxcdTA0NDdcXHUwNDM1XFx1MDQzZCc6IHtcbiAgICAnbmFtZSc6ICdCdWxnYXJpYW4gUGhvbmV0aWMnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIyddLFxuICAgICAgICBbJzQnLCAnJCddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnXiddLFxuICAgICAgICBbJzcnLCAnJiddLFxuICAgICAgICBbJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCddLFxuICAgICAgICBbJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNDRGJywgJ1xcdTA0MkYnXSxcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcbiAgICAgICAgWydcXHUwNDRBJywgJ1xcdTA0MkEnXSxcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcbiAgICAgICAgWydcXHUwNDQ5JywgJ1xcdTA0MjknXSxcbiAgICAgICAgWydcXHUwNDRFJywgJ1xcdTA0MkUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXG4gICAgICAgIFsnOycsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0NEMnLCAnXFx1MDQyQyddLFxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxuICAgICAgICBbJ1xcdTA0M0MnLCAnXFx1MDQxQyddLFxuICAgICAgICBbJywnLCAnPCddLFxuICAgICAgICBbJy4nLCAnPiddLFxuICAgICAgICBbJy8nLCAnPyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2JnJ11cbiAgfSxcbiAgJ1xcdTA0MTFcXHUwNDRhXFx1MDQzYlxcdTA0MzNcXHUwNDMwXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOCc6IHtcbiAgICAnbmFtZSc6ICdCdWxnYXJpYW4gQkRTJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydgJywgJ34nXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJz8nXSxcbiAgICAgICAgWyczJywgJysnXSxcbiAgICAgICAgWyc0JywgJ1wiJ10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICc9J10sXG4gICAgICAgIFsnNycsICc6J10sXG4gICAgICAgIFsnOCcsICcvJ10sXG4gICAgICAgIFsnOScsICdfJ10sXG4gICAgICAgIFsnMCcsICdcXHUyMTE2J10sXG4gICAgICAgIFsnLScsICdcXHUwNDA2J10sXG4gICAgICAgIFsnPScsICdWJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJywnLCAnXFx1MDQ0YiddLFxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxuICAgICAgICBbJ1xcdTA0M2EnLCAnXFx1MDQxYSddLFxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxuICAgICAgICBbJzsnLCAnXFx1MDBhNyddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNDRjJywgJ1xcdTA0MmMnXSxcbiAgICAgICAgWydcXHUwNDRmJywgJ1xcdTA0MmYnXSxcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcbiAgICAgICAgWydcXHUwNDNlJywgJ1xcdTA0MWUnXSxcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcbiAgICAgICAgWydcXHUwNDNkJywgJ1xcdTA0MWQnXSxcbiAgICAgICAgWydcXHUwNDEyJywgJ1xcdTA0MTInXSxcbiAgICAgICAgWydcXHUwNDNjJywgJ1xcdTA0MWMnXSxcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDQyZScsICdcXHUwNDRlJ10sXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXG4gICAgICAgIFsnXFx1MDQ0YScsICdcXHUwNDJhJ10sXG4gICAgICAgIFsnXFx1MDQ0ZCcsICdcXHUwNDJkJ10sXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXG4gICAgICAgIFsnXFx1MDQzZicsICdcXHUwNDFmJ10sXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXG4gICAgICAgIFsnXFx1MDQzYicsICdcXHUwNDFiJ10sXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXG4gICAgICBdXG4gICAgXVxuICB9LFxuICAnXFx1MDlhY1xcdTA5YmVcXHUwOTgyXFx1MDliMlxcdTA5YmUnOiB7XG4gICAgJ25hbWUnOiAnQmVuZ2FsaScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnJ10sXG4gICAgICAgIFsnMScsICcnLCAnXFx1MDlFNyddLFxuICAgICAgICBbJzInLCAnJywgJ1xcdTA5RTgnXSxcbiAgICAgICAgWyczJywgJ1xcdTA5Q0RcXHUwOUIwJywgJ1xcdTA5RTknXSxcbiAgICAgICAgWyc0JywgJ1xcdTA5QjBcXHUwOUNEJywgJ1xcdTA5RUEnXSxcbiAgICAgICAgWyc1JywgJ1xcdTA5OUNcXHUwOUNEXFx1MDlCMCcsICdcXHUwOUVCJ10sXG4gICAgICAgIFsnNicsICdcXHUwOUE0XFx1MDlDRFxcdTA5QjcnLCAnXFx1MDlFQyddLFxuICAgICAgICBbJzcnLCAnXFx1MDk5NVxcdTA5Q0RcXHUwOUIwJywgJ1xcdTA5RUQnXSxcbiAgICAgICAgWyc4JywgJ1xcdTA5QjZcXHUwOUNEXFx1MDlCMCcsICdcXHUwOUVFJ10sXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTA5RUYnXSxcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDlFNiddLFxuICAgICAgICBbJy0nLCAnXFx1MDk4MyddLFxuICAgICAgICBbJ1xcdTA5QzMnLCAnXFx1MDk4QicsICdcXHUwOUUyJywgJ1xcdTA5RTAnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDlDQycsICdcXHUwOTk0JywgJ1xcdTA5RDcnXSxcbiAgICAgICAgWydcXHUwOUM4JywgJ1xcdTA5OTAnXSxcbiAgICAgICAgWydcXHUwOUJFJywgJ1xcdTA5ODYnXSxcbiAgICAgICAgWydcXHUwOUMwJywgJ1xcdTA5ODgnLCAnXFx1MDlFMycsICdcXHUwOUUxJ10sXG4gICAgICAgIFsnXFx1MDlDMicsICdcXHUwOThBJ10sXG4gICAgICAgIFsnXFx1MDlBQycsICdcXHUwOUFEJ10sXG4gICAgICAgIFsnXFx1MDlCOScsICdcXHUwOTk5J10sXG4gICAgICAgIFsnXFx1MDk5NycsICdcXHUwOTk4J10sXG4gICAgICAgIFsnXFx1MDlBNicsICdcXHUwOUE3J10sXG4gICAgICAgIFsnXFx1MDk5QycsICdcXHUwOTlEJ10sXG4gICAgICAgIFsnXFx1MDlBMScsICdcXHUwOUEyJywgJ1xcdTA5REMnLCAnXFx1MDlERCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA5Q0InLCAnXFx1MDk5MycsICdcXHUwOUY0JywgJ1xcdTA5RjUnXSxcbiAgICAgICAgWydcXHUwOUM3JywgJ1xcdTA5OEYnLCAnXFx1MDlGNicsICdcXHUwOUY3J10sXG4gICAgICAgIFsnXFx1MDlDRCcsICdcXHUwOTg1JywgJ1xcdTA5RjgnLCAnXFx1MDlGOSddLFxuICAgICAgICBbJ1xcdTA5QkYnLCAnXFx1MDk4NycsICdcXHUwOUUyJywgJ1xcdTA5OEMnXSxcbiAgICAgICAgWydcXHUwOUMxJywgJ1xcdTA5ODknXSxcbiAgICAgICAgWydcXHUwOUFBJywgJ1xcdTA5QUInXSxcbiAgICAgICAgWydcXHUwOUIwJywgJycsICdcXHUwOUYwJywgJ1xcdTA5RjEnXSxcbiAgICAgICAgWydcXHUwOTk1JywgJ1xcdTA5OTYnXSxcbiAgICAgICAgWydcXHUwOUE0JywgJ1xcdTA5QTUnXSxcbiAgICAgICAgWydcXHUwOTlBJywgJ1xcdTA5OUInXSxcbiAgICAgICAgWydcXHUwOTlGJywgJ1xcdTA5QTAnXSxcbiAgICAgICAgWydcXHUwOUJDJywgJ1xcdTA5OUUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJyddLFxuICAgICAgICBbJ1xcdTA5ODInLCAnXFx1MDk4MScsICdcXHUwOUZBJ10sXG4gICAgICAgIFsnXFx1MDlBRScsICdcXHUwOUEzJ10sXG4gICAgICAgIFsnXFx1MDlBOCddLFxuICAgICAgICBbJ1xcdTA5QUMnXSxcbiAgICAgICAgWydcXHUwOUIyJ10sXG4gICAgICAgIFsnXFx1MDlCOCcsICdcXHUwOUI2J10sXG4gICAgICAgIFsnLCcsICdcXHUwOUI3J10sXG4gICAgICAgIFsnLicsICd7J10sXG4gICAgICAgIFsnXFx1MDlBRicsICdcXHUwOURGJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydibiddXG4gIH0sXG4gICdCb3NhbnNraSc6IHtcbiAgICAnbmFtZSc6ICdCb3NuaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwMEI4JywgJ1xcdTAwQTgnXSxcbiAgICAgICAgWycxJywgJyEnLCAnfiddLFxuICAgICAgICBbJzInLCAnXCInLCAnXFx1MDJDNyddLFxuICAgICAgICBbJzMnLCAnIycsICdeJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAyRDgnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBCMCddLFxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMkRCJ10sXG4gICAgICAgIFsnNycsICcvJywgJ2AnXSxcbiAgICAgICAgWyc4JywgJygnLCAnXFx1MDJEOSddLFxuICAgICAgICBbJzknLCAnKScsICdcXHUwMEI0J10sXG4gICAgICAgIFsnMCcsICc9JywgJ1xcdTAyREQnXSxcbiAgICAgICAgWydcXCcnLCAnPycsICdcXHUwMEE4J10sXG4gICAgICAgIFsnKycsICcqJywgJ1xcdTAwQjgnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJ1xcXFwnXSxcbiAgICAgICAgWyd3JywgJ1cnLCAnfCddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDE2MScsICdcXHUwMTYwJywgJ1xcdTAwRjcnXSxcbiAgICAgICAgWydcXHUwMTExJywgJ1xcdTAxMTAnLCAnXFx1MDBENyddLFxuICAgICAgICBbJ1xcdTAxN0UnLCAnXFx1MDE3RCcsICdcXHUwMEE0J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRicsICdbJ10sXG4gICAgICAgIFsnZycsICdHJywgJ10nXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDE0MiddLFxuICAgICAgICBbJ2wnLCAnTCcsICdcXHUwMTQxJ10sXG4gICAgICAgIFsnXFx1MDEwRCcsICdcXHUwMTBDJ10sXG4gICAgICAgIFsnXFx1MDEwNycsICdcXHUwMTA2JywgJ1xcdTAwREYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+J10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsndicsICdWJywgJ0AnXSxcbiAgICAgICAgWydiJywgJ0InLCAneyddLFxuICAgICAgICBbJ24nLCAnTicsICd9J10sXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwQTcnXSxcbiAgICAgICAgWycsJywgJzsnLCAnPCddLFxuICAgICAgICBbJy4nLCAnOicsICc+J10sXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwQTknXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2JzJ11cbiAgfSxcbiAgJ0NhbmFkaWVubmUtZnJhblxcdTAwZTdhaXNlJzoge1xuICAgICduYW1lJzogJ0NhbmFkaWFuIEZyZW5jaCcsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnIycsICd8JywgJ1xcXFwnXSxcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBCMSddLFxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxuICAgICAgICBbJzMnLCAnLycsICdcXHUwMEEzJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwQTInXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBBNCddLFxuICAgICAgICBbJzYnLCAnPycsICdcXHUwMEFDJ10sXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTAwQTYnXSxcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBCMiddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUwMEIzJ10sXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTAwQkMnXSxcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBCRCddLFxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMEJFJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ3EnLCAnUSddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ2UnLCAnRSddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMEE3J10sXG4gICAgICAgIFsncCcsICdQJywgJ1xcdTAwQjYnXSxcbiAgICAgICAgWydeJywgJ14nLCAnWyddLFxuICAgICAgICBbJ1xcdTAwQjgnLCAnXFx1MDBBOCcsICddJ10sXG4gICAgICAgIFsnPCcsICc+JywgJ30nXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnOycsICc6JywgJ34nXSxcbiAgICAgICAgWydgJywgJ2AnLCAneyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwMEFCJywgJ1xcdTAwQkInLCAnXFx1MDBCMCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEI1J10sXG4gICAgICAgIFsnLCcsICdcXCcnLCAnXFx1MDBBRiddLFxuICAgICAgICBbJy4nLCAnLicsICdcXHUwMEFEJ10sXG4gICAgICAgIFsnXFx1MDBFOScsICdcXHUwMEM5JywgJ1xcdTAwQjQnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2ZyLUNBJ11cbiAgfSxcbiAgJ1xcdTAxMGNlc2t5Jzoge1xuICAgICduYW1lJzogJ0N6ZWNoJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWyc7JywgJ1xcdTAwYjAnLCAnYCcsICd+J10sXG4gICAgICAgIFsnKycsICcxJywgJyEnXSxcbiAgICAgICAgWydcXHUwMTFCJywgJzInLCAnQCddLFxuICAgICAgICBbJ1xcdTAxNjEnLCAnMycsICcjJ10sXG4gICAgICAgIFsnXFx1MDEwRCcsICc0JywgJyQnXSxcbiAgICAgICAgWydcXHUwMTU5JywgJzUnLCAnJSddLFxuICAgICAgICBbJ1xcdTAxN0UnLCAnNicsICdeJ10sXG4gICAgICAgIFsnXFx1MDBGRCcsICc3JywgJyYnXSxcbiAgICAgICAgWydcXHUwMEUxJywgJzgnLCAnKiddLFxuICAgICAgICBbJ1xcdTAwRUQnLCAnOScsICcoJ10sXG4gICAgICAgIFsnXFx1MDBFOScsICcwJywgJyknXSxcbiAgICAgICAgWyc9JywgJyUnLCAnLScsICdfJ10sXG4gICAgICAgIFsnXFx1MDBCNCcsICdcXHUwMmM3JywgJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1xcdTAwRkEnLCAnLycsICdbJywgJ3snXSxcbiAgICAgICAgWycpJywgJygnLCAnXScsICd9J10sXG4gICAgICAgIFsnXFx1MDBBOCcsICdcXCcnLCAnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ1xcdTAxNkYnLCAnXCInLCAnOycsICc6J10sXG4gICAgICAgIFsnXFx1MDBBNycsICchJywgJ1xcdTAwYTQnLCAnXiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnJywgJ1xcdTAyZGQnXSxcbiAgICAgICAgWyd6JywgJ1onXSxcbiAgICAgICAgWyd4JywgJ1gnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nXSxcbiAgICAgICAgWycsJywgJz8nLCAnPCcsICdcXHUwMGQ3J10sXG4gICAgICAgIFsnLicsICc6JywgJz4nLCAnXFx1MDBmNyddLFxuICAgICAgICBbJy0nLCAnXycsICcvJywgJz8nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydjcyddXG4gIH0sXG4gICdEYW5zayc6IHtcbiAgICAnbmFtZSc6ICdEYW5pc2gnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAwYmQnLCAnXFx1MDBhNyddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGEzJ10sXG4gICAgICAgIFsnNCcsICdcXHUwMGE0JywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJzYnLCAnJiddLFxuICAgICAgICBbJzcnLCAnLycsICd7J10sXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxuICAgICAgICBbJzAnLCAnPScsICd9J10sXG4gICAgICAgIFsnKycsICc/J10sXG4gICAgICAgIFsnXFx1MDBiNCcsICdgJywgJ3wnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMGU1JywgJ1xcdTAwYzUnXSxcbiAgICAgICAgWydcXHUwMGE4JywgJ14nLCAnfiddLFxuICAgICAgICBbJ1xcJycsICcqJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ1xcdTAwZTYnLCAnXFx1MDBjNiddLFxuICAgICAgICBbJ1xcdTAwZjgnLCAnXFx1MDBkOCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyc8JywgJz4nLCAnXFxcXCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTScsICdcXHUwM2JjJywgJ1xcdTAzOWMnXSxcbiAgICAgICAgWycsJywgJzsnXSxcbiAgICAgICAgWycuJywgJzonXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2RhJ11cbiAgfSxcbiAgJ0RldXRzY2gnOiB7XG4gICAgJ25hbWUnOiAnR2VybWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydeJywgJ1xcdTAwYjAnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAwYjInXSxcbiAgICAgICAgWyczJywgJ1xcdTAwYTcnLCAnXFx1MDBiMyddLFxuICAgICAgICBbJzQnLCAnJCddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnJiddLFxuICAgICAgICBbJzcnLCAnLycsICd7J10sXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxuICAgICAgICBbJzAnLCAnPScsICd9J10sXG4gICAgICAgIFsnXFx1MDBkZicsICc/JywgJ1xcXFwnXSxcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJ0AnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1xcdTAwZmMnLCAnXFx1MDBkYyddLFxuICAgICAgICBbJysnLCAnKicsICd+J10sXG4gICAgICAgIFsnIycsICdcXCcnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnXFx1MDBmNicsICdcXHUwMGQ2J10sXG4gICAgICAgIFsnXFx1MDBlNCcsICdcXHUwMGM0J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPicsICdcXHUwMGE2J10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsndicsICdWJ10sXG4gICAgICAgIFsnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwYjUnXSxcbiAgICAgICAgWycsJywgJzsnXSxcbiAgICAgICAgWycuJywgJzonXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydkZSddXG4gIH0sXG4gICdEaW5nYmF0cyc6IHtcbiAgICAnbmFtZSc6ICdEaW5nYmF0cycsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1Mjc2NCcsICdcXHUyNzY1JywgJ1xcdTI3NjYnLCAnXFx1Mjc2NyddLFxuICAgICAgICBbJ1xcdTI3OGEnLCAnXFx1Mjc4MCcsICdcXHUyNzc2JywgJ1xcdTI3NjgnXSxcbiAgICAgICAgWydcXHUyNzhiJywgJ1xcdTI3ODEnLCAnXFx1Mjc3NycsICdcXHUyNzY5J10sXG4gICAgICAgIFsnXFx1Mjc4YycsICdcXHUyNzgyJywgJ1xcdTI3NzgnLCAnXFx1Mjc2YSddLFxuICAgICAgICBbJ1xcdTI3OGQnLCAnXFx1Mjc4MycsICdcXHUyNzc5JywgJ1xcdTI3NmInXSxcbiAgICAgICAgWydcXHUyNzhlJywgJ1xcdTI3ODQnLCAnXFx1Mjc3YScsICdcXHUyNzZjJ10sXG4gICAgICAgIFsnXFx1Mjc4ZicsICdcXHUyNzg1JywgJ1xcdTI3N2InLCAnXFx1Mjc2ZCddLFxuICAgICAgICBbJ1xcdTI3OTAnLCAnXFx1Mjc4NicsICdcXHUyNzdjJywgJ1xcdTI3NmUnXSxcbiAgICAgICAgWydcXHUyNzkxJywgJ1xcdTI3ODcnLCAnXFx1Mjc3ZCcsICdcXHUyNzZmJ10sXG4gICAgICAgIFsnXFx1Mjc5MicsICdcXHUyNzg4JywgJ1xcdTI3N2UnLCAnXFx1Mjc3MCddLFxuICAgICAgICBbJ1xcdTI3OTMnLCAnXFx1Mjc4OScsICdcXHUyNzdmJywgJ1xcdTI3NzEnXSxcbiAgICAgICAgWydcXHUyNzk1JywgJ1xcdTI3OTYnLCAnXFx1Mjc0YycsICdcXHUyNzk3J10sXG4gICAgICAgIFsnXFx1MjcwMicsICdcXHUyNzA0JywgJ1xcdTI3MDEnLCAnXFx1MjcwMyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUyNzE0JywgJ1xcdTI3MDUnLCAnXFx1MjcxMyddLFxuICAgICAgICBbJ1xcdTI3MTgnLCAnXFx1MjcxNScsICdcXHUyNzE3JywgJ1xcdTI3MTYnXSxcbiAgICAgICAgWydcXHUyNzFhJywgJ1xcdTI3MTknLCAnXFx1MjcxYicsICdcXHUyNzFjJ10sXG4gICAgICAgIFsnXFx1MjcxZCcsICdcXHUyNzFlJywgJ1xcdTI3MWYnLCAnXFx1MjcyMCddLFxuICAgICAgICBbJ1xcdTI3MjInLCAnXFx1MjcyMycsICdcXHUyNzI0JywgJ1xcdTI3MjUnXSxcbiAgICAgICAgWydcXHUyNzI2JywgJ1xcdTI3MjcnLCAnXFx1MjcyOCcsICdcXHUyNzU2J10sXG4gICAgICAgIFsnXFx1MjcyOScsICdcXHUyNzJhJywgJ1xcdTI3MmQnLCAnXFx1MjczMCddLFxuICAgICAgICBbJ1xcdTI3MmMnLCAnXFx1MjcyYicsICdcXHUyNzJlJywgJ1xcdTI3MmYnXSxcbiAgICAgICAgWydcXHUyNzM2JywgJ1xcdTI3MzEnLCAnXFx1MjczMicsICdcXHUyNzQ5J10sXG4gICAgICAgIFsnXFx1MjczYicsICdcXHUyNzNjJywgJ1xcdTI3M2QnLCAnXFx1MjczZSddLFxuICAgICAgICBbJ1xcdTI3NDQnLCAnXFx1Mjc0NScsICdcXHUyNzQ2JywgJ1xcdTI3NDMnXSxcbiAgICAgICAgWydcXHUyNzMzJywgJ1xcdTI3MzQnLCAnXFx1MjczNScsICdcXHUyNzIxJ10sXG4gICAgICAgIFsnXFx1MjczNycsICdcXHUyNzM4JywgJ1xcdTI3MzknLCAnXFx1MjczYSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUyNzk5JywgJ1xcdTI3OWEnLCAnXFx1Mjc5OCcsICdcXHUyNzU4J10sXG4gICAgICAgIFsnXFx1MjdiNScsICdcXHUyN2I2JywgJ1xcdTI3YjQnLCAnXFx1Mjc1OSddLFxuICAgICAgICBbJ1xcdTI3YjgnLCAnXFx1MjdiOScsICdcXHUyN2I3JywgJ1xcdTI3NWEnXSxcbiAgICAgICAgWydcXHUyNzk0JywgJ1xcdTI3OWMnLCAnXFx1MjdiYScsICdcXHUyN2JiJ10sXG4gICAgICAgIFsnXFx1Mjc5ZCcsICdcXHUyNzllJywgJ1xcdTI3YTEnLCAnXFx1Mjc3MiddLFxuICAgICAgICBbJ1xcdTI3YTknLCAnXFx1MjdhYScsICdcXHUyN2FiJywgJ1xcdTI3YWMnXSxcbiAgICAgICAgWydcXHUyN2E0JywgJ1xcdTI3YTMnLCAnXFx1MjdhMicsICdcXHUyNzliJ10sXG4gICAgICAgIFsnXFx1MjdiMycsICdcXHUyN2JjJywgJ1xcdTI3YmQnLCAnXFx1Mjc3MyddLFxuICAgICAgICBbJ1xcdTI3YWQnLCAnXFx1MjdhZScsICdcXHUyN2FmJywgJ1xcdTI3YjEnXSxcbiAgICAgICAgWydcXHUyN2E4JywgJ1xcdTI3YTYnLCAnXFx1MjdhNScsICdcXHUyN2E3J10sXG4gICAgICAgIFsnXFx1Mjc5ZicsICdcXHUyN2EwJywgJ1xcdTI3YmUnLCAnXFx1MjdiMiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUyNzBjJywgJ1xcdTI3MGInLCAnXFx1MjcwYScsICdcXHUyNzBkJ10sXG4gICAgICAgIFsnXFx1Mjc0ZicsICdcXHUyNzUwJywgJ1xcdTI3NTEnLCAnXFx1Mjc1MiddLFxuICAgICAgICBbJ1xcdTI3M2YnLCAnXFx1Mjc0MCcsICdcXHUyNzQxJywgJ1xcdTI3NDInXSxcbiAgICAgICAgWydcXHUyNzQ3JywgJ1xcdTI3NDgnLCAnXFx1Mjc0YScsICdcXHUyNzRiJ10sXG4gICAgICAgIFsnXFx1Mjc1NycsICdcXHUyNzU1JywgJ1xcdTI3NjInLCAnXFx1Mjc2MyddLFxuICAgICAgICBbJ1xcdTI3NTMnLCAnXFx1Mjc1NCcsICdcXHUyN2IwJywgJ1xcdTI3YmYnXSxcbiAgICAgICAgWydcXHUyNzBmJywgJ1xcdTI3MTAnLCAnXFx1MjcwZScsICdcXHUyNzc0J10sXG4gICAgICAgIFsnXFx1MjcxMicsICdcXHUyNzExJywgJ1xcdTI3NGQnLCAnXFx1Mjc0ZSddLFxuICAgICAgICBbJ1xcdTI3MDknLCAnXFx1MjcwNicsICdcXHUyNzA4JywgJ1xcdTI3MDcnXSxcbiAgICAgICAgWydcXHUyNzViJywgJ1xcdTI3NWQnLCAnXFx1Mjc2MScsICdcXHUyNzc1J10sXG4gICAgICAgIFsnXFx1Mjc1YycsICdcXHUyNzVlJywgJ1xcdTI3NWYnLCAnXFx1Mjc2MCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gICdcXHUwNzhiXFx1MDdhOFxcdTA3ODhcXHUwN2FjXFx1MDc4MFxcdTA3YThcXHUwNzg0XFx1MDdhNlxcdTA3OTBcXHUwN2IwJzoge1xuICAgICduYW1lJzogJ0RpdmVoaScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICd+J10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdAJ10sXG4gICAgICAgIFsnMycsICcjJ10sXG4gICAgICAgIFsnNCcsICckJ10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICdeJ10sXG4gICAgICAgIFsnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcpJ10sXG4gICAgICAgIFsnMCcsICcoJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA3YWInLCAnXFx1MDBkNyddLFxuICAgICAgICBbJ1xcdTA3YWUnLCAnXFx1MjAxOSddLFxuICAgICAgICBbJ1xcdTA3YTcnLCAnXFx1MjAxYyddLFxuICAgICAgICBbJ1xcdTA3YTknLCAnLyddLFxuICAgICAgICBbJ1xcdTA3YWQnLCAnOiddLFxuICAgICAgICBbJ1xcdTA3OGUnLCAnXFx1MDdhNCddLFxuICAgICAgICBbJ1xcdTA3ODMnLCAnXFx1MDc5YyddLFxuICAgICAgICBbJ1xcdTA3ODknLCAnXFx1MDdhMyddLFxuICAgICAgICBbJ1xcdTA3OGMnLCAnXFx1MDdhMCddLFxuICAgICAgICBbJ1xcdTA3ODAnLCAnXFx1MDc5OSddLFxuICAgICAgICBbJ1xcdTA3OGQnLCAnXFx1MDBmNyddLFxuICAgICAgICBbJ1snLCAneyddLFxuICAgICAgICBbJ10nLCAnfSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwN2E4JywgJzwnXSxcbiAgICAgICAgWydcXHUwN2FhJywgJz4nXSxcbiAgICAgICAgWydcXHUwN2IwJywgJy4nLCAnLCcsICcsJ10sXG4gICAgICAgIFsnXFx1MDdhNicsICdcXHUwNjBjJ10sXG4gICAgICAgIFsnXFx1MDdhYycsICdcIiddLFxuICAgICAgICBbJ1xcdTA3ODgnLCAnXFx1MDdhNSddLFxuICAgICAgICBbJ1xcdTA3ODcnLCAnXFx1MDdhMiddLFxuICAgICAgICBbJ1xcdTA3ODInLCAnXFx1MDc5OCddLFxuICAgICAgICBbJ1xcdTA3ODYnLCAnXFx1MDc5YSddLFxuICAgICAgICBbJ1xcdTA3OGEnLCAnXFx1MDdhMSddLFxuICAgICAgICBbJ1xcdWZkZjInLCAnXFx1MDYxYicsICc7JywgJzsnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFxcXCcsICd8J10sXG4gICAgICAgIFsnXFx1MDc5MicsICdcXHUwNzk2J10sXG4gICAgICAgIFsnXFx1MDc5MScsICdcXHUwNzk1J10sXG4gICAgICAgIFsnXFx1MDc5MCcsICdcXHUwNzhmJ10sXG4gICAgICAgIFsnXFx1MDc5NCcsICdcXHUwNzk3JywgJ1xcdTIwMEQnXSxcbiAgICAgICAgWydcXHUwNzg1JywgJ1xcdTA3OWYnLCAnXFx1MjAwQyddLFxuICAgICAgICBbJ1xcdTA3OGInLCAnXFx1MDc5YicsICdcXHUyMDBFJ10sXG4gICAgICAgIFsnXFx1MDc4NCcsICdcXHUwNzlEJywgJ1xcdTIwMEYnXSxcbiAgICAgICAgWydcXHUwNzgxJywgJ1xcXFwnXSxcbiAgICAgICAgWydcXHUwNzkzJywgJ1xcdTA3OWUnXSxcbiAgICAgICAgWydcXHUwN2FmJywgJ1xcdTA2MWYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2R2J11cbiAgfSxcbiAgJ0R2b3Jhayc6IHtcbiAgICAnbmFtZSc6ICdEdm9yYWsnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ2AnLCAnfiddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIyddLFxuICAgICAgICBbJzQnLCAnJCddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnXiddLFxuICAgICAgICBbJzcnLCAnJiddLFxuICAgICAgICBbJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCddLFxuICAgICAgICBbJzAnLCAnKSddLFxuICAgICAgICBbJ1snLCAneyddLFxuICAgICAgICBbJ10nLCAnfSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXCcnLCAnXCInXSxcbiAgICAgICAgWycsJywgJzwnXSxcbiAgICAgICAgWycuJywgJz4nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWydsJywgJ0wnXSxcbiAgICAgICAgWycvJywgJz8nXSxcbiAgICAgICAgWyc9JywgJysnXSxcbiAgICAgICAgWydcXFxcJywgJ3wnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsnZScsICdFJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzsnLCAnOiddLFxuICAgICAgICBbJ3EnLCAnUSddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAgJ1xcdTAzOTVcXHUwM2JiXFx1MDNiYlxcdTAzYjdcXHUwM2JkXFx1MDNiOVxcdTAzYmFcXHUwM2FjJzoge1xuICAgICduYW1lJzogJ0dyZWVrJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydgJywgJ34nXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1MDBiMiddLFxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGIzJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYTMnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBhNyddLFxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMGI2J10sXG4gICAgICAgIFsnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTAwYTQnXSxcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MDBhNiddLFxuICAgICAgICBbJzAnLCAnKScsICdcXHUwMGJhJ10sXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwYjEnXSxcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDBiZCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWyc7JywgJzonXSxcbiAgICAgICAgWydcXHUwM2MyJywgJ14nXSxcbiAgICAgICAgWydcXHUwM2I1JywgJ1xcdTAzOTUnXSxcbiAgICAgICAgWydcXHUwM2MxJywgJ1xcdTAzYTEnXSxcbiAgICAgICAgWydcXHUwM2M0JywgJ1xcdTAzYTQnXSxcbiAgICAgICAgWydcXHUwM2M1JywgJ1xcdTAzYTUnXSxcbiAgICAgICAgWydcXHUwM2I4JywgJ1xcdTAzOTgnXSxcbiAgICAgICAgWydcXHUwM2I5JywgJ1xcdTAzOTknXSxcbiAgICAgICAgWydcXHUwM2JmJywgJ1xcdTAzOWYnXSxcbiAgICAgICAgWydcXHUwM2MwJywgJ1xcdTAzYTAnXSxcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MjAxYyddLFxuICAgICAgICBbJ10nLCAnfScsICdcXHUyMDFkJ10sXG4gICAgICAgIFsnXFxcXCcsICd8JywgJ1xcdTAwYWMnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDNiMScsICdcXHUwMzkxJ10sXG4gICAgICAgIFsnXFx1MDNjMycsICdcXHUwM2EzJ10sXG4gICAgICAgIFsnXFx1MDNiNCcsICdcXHUwMzk0J10sXG4gICAgICAgIFsnXFx1MDNjNicsICdcXHUwM2E2J10sXG4gICAgICAgIFsnXFx1MDNiMycsICdcXHUwMzkzJ10sXG4gICAgICAgIFsnXFx1MDNiNycsICdcXHUwMzk3J10sXG4gICAgICAgIFsnXFx1MDNiZScsICdcXHUwMzllJ10sXG4gICAgICAgIFsnXFx1MDNiYScsICdcXHUwMzlhJ10sXG4gICAgICAgIFsnXFx1MDNiYicsICdcXHUwMzliJ10sXG4gICAgICAgIFsnXFx1MDM4NCcsICdcXHUwMGE4JywgJ1xcdTAzODUnXSxcbiAgICAgICAgWydcXCcnLCAnXCInXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+J10sXG4gICAgICAgIFsnXFx1MDNiNicsICdcXHUwMzk2J10sXG4gICAgICAgIFsnXFx1MDNjNycsICdcXHUwM2E3J10sXG4gICAgICAgIFsnXFx1MDNjOCcsICdcXHUwM2E4J10sXG4gICAgICAgIFsnXFx1MDNjOScsICdcXHUwM2E5J10sXG4gICAgICAgIFsnXFx1MDNiMicsICdcXHUwMzkyJ10sXG4gICAgICAgIFsnXFx1MDNiZCcsICdcXHUwMzlkJ10sXG4gICAgICAgIFsnXFx1MDNiYycsICdcXHUwMzljJ10sXG4gICAgICAgIFsnLCcsICc8J10sXG4gICAgICAgIFsnLicsICc+J10sXG4gICAgICAgIFsnLycsICc/J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydlbCddXG4gIH0sXG4gICdFZXN0aSc6IHtcbiAgICAnbmFtZSc6ICdFc3RvbmlhbicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDJDNycsICd+J10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdcIicsICdAJywgJ0AnXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBBMycsICdcXHUwMEEzJ10sXG4gICAgICAgIFsnNCcsICdcXHUwMEE0JywgJyQnLCAnJCddLFxuICAgICAgICBbJzUnLCAnJScsICdcXHUyMEFDJ10sXG4gICAgICAgIFsnNicsICcmJ10sXG4gICAgICAgIFsnNycsICcvJywgJ3snLCAneyddLFxuICAgICAgICBbJzgnLCAnKCcsICdbJywgJ1snXSxcbiAgICAgICAgWyc5JywgJyknLCAnXScsICddJ10sXG4gICAgICAgIFsnMCcsICc9JywgJ30nLCAnfSddLFxuICAgICAgICBbJysnLCAnPycsICdcXFxcJywgJ1xcXFwnXSxcbiAgICAgICAgWydcXHUwMEI0JywgJ2AnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMEZDJywgJ1xcdTAwREMnXSxcbiAgICAgICAgWydcXHUwMEY1JywgJ1xcdTAwRDUnLCAnXFx1MDBBNycsICdcXHUwMEE3J10sXG4gICAgICAgIFsnXFwnJywgJyonLCAnXFx1MDBCRCcsICdcXHUwMEJEJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTYxJywgJ1xcdTAxNjAnXSxcbiAgICAgICAgWydkJywgJ0QnXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snXSxcbiAgICAgICAgWydsJywgJ0wnXSxcbiAgICAgICAgWydcXHUwMEY2JywgJ1xcdTAwRDYnXSxcbiAgICAgICAgWydcXHUwMEU0JywgJ1xcdTAwQzQnLCAnXicsICdeJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPicsICd8JywgJ3wnXSxcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDE3RScsICdcXHUwMTdEJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsndicsICdWJ10sXG4gICAgICAgIFsnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnLCcsICc7J10sXG4gICAgICAgIFsnLicsICc6J10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydldCddXG4gIH0sXG4gICdFc3BhXFx1MDBmMW9sJzoge1xuICAgICduYW1lJzogJ1NwYW5pc2gnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAwYmEnLCAnXFx1MDBhYScsICdcXFxcJ10sXG4gICAgICAgIFsnMScsICchJywgJ3wnXSxcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcbiAgICAgICAgWyczJywgJ1xcJycsICcjJ10sXG4gICAgICAgIFsnNCcsICckJywgJ34nXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMGFjJ10sXG4gICAgICAgIFsnNycsICcvJ10sXG4gICAgICAgIFsnOCcsICcoJ10sXG4gICAgICAgIFsnOScsICcpJ10sXG4gICAgICAgIFsnMCcsICc9J10sXG4gICAgICAgIFsnXFwnJywgJz8nXSxcbiAgICAgICAgWydcXHUwMGExJywgJ1xcdTAwYmYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnYCcsICdeJywgJ1snXSxcbiAgICAgICAgWycrJywgJyonLCAnXSddLFxuICAgICAgICBbJ1xcdTAwZTcnLCAnXFx1MDBjNycsICd9J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ1xcdTAwZjEnLCAnXFx1MDBkMSddLFxuICAgICAgICBbJ1xcdTAwYjQnLCAnXFx1MDBhOCcsICd7J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPiddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJywnLCAnOyddLFxuICAgICAgICBbJy4nLCAnOiddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnZXMnXVxuICB9LFxuICAnXFx1MDYyZlxcdTA2MzFcXHUwNmNjJzoge1xuICAgICduYW1lJzogJ0RhcmknLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTIwMEQnLCAnXFx1MDBGNycsICd+J10sXG4gICAgICAgIFsnXFx1MDZGMScsICchJywgJ2AnXSxcbiAgICAgICAgWydcXHUwNkYyJywgJ1xcdTA2NkMnLCAnQCddLFxuICAgICAgICBbJ1xcdTA2RjMnLCAnXFx1MDY2QicsICcjJ10sXG4gICAgICAgIFsnXFx1MDZGNCcsICdcXHUwNjBCJywgJyQnXSxcbiAgICAgICAgWydcXHUwNkY1JywgJ1xcdTA2NkEnLCAnJSddLFxuICAgICAgICBbJ1xcdTA2RjYnLCAnXFx1MDBENycsICdeJ10sXG4gICAgICAgIFsnXFx1MDZGNycsICdcXHUwNjBDJywgJyYnXSxcbiAgICAgICAgWydcXHUwNkY4JywgJyonLCAnXFx1MjAyMiddLFxuICAgICAgICBbJ1xcdTA2RjknLCAnKScsICdcXHUyMDBFJ10sXG4gICAgICAgIFsnXFx1MDZGMCcsICcoJywgJ1xcdTIwMEYnXSxcbiAgICAgICAgWyctJywgJ1xcdTA2NDAnLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNjM2JywgJ1xcdTA2NTInLCAnXFx1MDBCMCddLFxuICAgICAgICBbJ1xcdTA2MzUnLCAnXFx1MDY0QyddLFxuICAgICAgICBbJ1xcdTA2MkInLCAnXFx1MDY0RCcsICdcXHUyMEFDJ10sXG4gICAgICAgIFsnXFx1MDY0MicsICdcXHUwNjRCJywgJ1xcdUZEM0UnXSxcbiAgICAgICAgWydcXHUwNjQxJywgJ1xcdTA2NEYnLCAnXFx1RkQzRiddLFxuICAgICAgICBbJ1xcdTA2M0EnLCAnXFx1MDY1MCcsICdcXHUwNjU2J10sXG4gICAgICAgIFsnXFx1MDYzOScsICdcXHUwNjRFJywgJ1xcdTA2NTknXSxcbiAgICAgICAgWydcXHUwNjQ3JywgJ1xcdTA2NTEnLCAnXFx1MDY1NSddLFxuICAgICAgICBbJ1xcdTA2MkUnLCAnXScsICdcXCcnXSxcbiAgICAgICAgWydcXHUwNjJEJywgJ1snLCAnXCInXSxcbiAgICAgICAgWydcXHUwNjJDJywgJ30nLCAnXFx1MDY4MSddLFxuICAgICAgICBbJ1xcdTA2ODYnLCAneycsICdcXHUwNjg1J10sXG4gICAgICAgIFsnXFxcXCcsICd8JywgJz8nXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDYzNCcsICdcXHUwNjI0JywgJ1xcdTA2OUEnXSxcbiAgICAgICAgWydcXHUwNjMzJywgJ1xcdTA2MjYnLCAnXFx1MDZDRCddLFxuICAgICAgICBbJ1xcdTA2Q0MnLCAnXFx1MDY0QScsICdcXHUwNjQ5J10sXG4gICAgICAgIFsnXFx1MDYyOCcsICdcXHUwNjI1JywgJ1xcdTA2RDAnXSxcbiAgICAgICAgWydcXHUwNjQ0JywgJ1xcdTA2MjMnLCAnXFx1MDZCNyddLFxuICAgICAgICBbJ1xcdTA2MjcnLCAnXFx1MDYyMicsICdcXHUwNjcxJ10sXG4gICAgICAgIFsnXFx1MDYyQScsICdcXHUwNjI5JywgJ1xcdTA2N0MnXSxcbiAgICAgICAgWydcXHUwNjQ2JywgJ1xcdTAwQkInLCAnXFx1MDZCQyddLFxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFx1MDBBQicsICdcXHUwNkJBJ10sXG4gICAgICAgIFsnXFx1MDZBOScsICc6JywgJzsnXSxcbiAgICAgICAgWydcXHUwNkFGJywgJ1xcdTA2MUInLCAnXFx1MDZBQiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwNjM4JywgJ1xcdTA2NDMnLCAnXFx1MDZEMiddLFxuICAgICAgICBbJ1xcdTA2MzcnLCAnXFx1MDY1MycsICdcXHUwNjkxJ10sXG4gICAgICAgIFsnXFx1MDYzMicsICdcXHUwNjk4JywgJ1xcdTA2OTYnXSxcbiAgICAgICAgWydcXHUwNjMxJywgJ1xcdTA2NzAnLCAnXFx1MDY5MyddLFxuICAgICAgICBbJ1xcdTA2MzAnLCAnXFx1MjAwQycsICdcXHUwNjg4J10sXG4gICAgICAgIFsnXFx1MDYyRicsICdcXHUwNjU0JywgJ1xcdTA2ODknXSxcbiAgICAgICAgWydcXHUwNjdFJywgJ1xcdTA2MjEnLCAnXFx1MDY3OSddLFxuICAgICAgICBbJ1xcdTA2NDgnLCAnPicsICcsJ10sXG4gICAgICAgIFsnLicsICc8JywgJ1xcdTA2QzcnXSxcbiAgICAgICAgWycvJywgJ1xcdTA2MUYnLCAnXFx1MDZDOSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnZmEtQUYnXVxuICB9LFxuICAnXFx1MDY0MVxcdTA2MjdcXHUwNjMxXFx1MDYzM1xcdTA2Y2MnOiB7XG4gICAgJ25hbWUnOiAnRmFyc2knLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTA2N2UnLCAnXFx1MDY1MSAnXSxcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBhMScsICdcXHUwMGI5J10sXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTAwYjInXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGE0JywgJ1xcdTAwYTMnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMGJjJ10sXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTAwYmQnXSxcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBiZSddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUyMDE4J10sXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTIwMTknXSxcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBhNSddLFxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMGQ3JywgJ1xcdTAwZjcnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDYzNicsICdcXHUwNjRlJ10sXG4gICAgICAgIFsnXFx1MDYzNScsICdcXHUwNjRiJ10sXG4gICAgICAgIFsnXFx1MDYyYicsICdcXHUwNjRmJ10sXG4gICAgICAgIFsnXFx1MDY0MicsICdcXHUwNjRjJ10sXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjQ0J10sXG4gICAgICAgIFsnXFx1MDYzYScsICdcXHUwNjI1J10sXG4gICAgICAgIFsnXFx1MDYzOScsICdcXHUyMDE4J10sXG4gICAgICAgIFsnXFx1MDY0NycsICdcXHUwMGY3J10sXG4gICAgICAgIFsnXFx1MDYyZScsICdcXHUwMGQ3J10sXG4gICAgICAgIFsnXFx1MDYyZCcsICdcXHUwNjFiJ10sXG4gICAgICAgIFsnXFx1MDYyYycsICc8J10sXG4gICAgICAgIFsnXFx1MDY4NicsICc+J10sXG4gICAgICAgIFsnXFx1MDY5OCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA2MzQnLCAnXFx1MDY1MCddLFxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDY0ZCddLFxuICAgICAgICBbJ1xcdTA2NGEnLCAnXSddLFxuICAgICAgICBbJ1xcdTA2MjgnLCAnWyddLFxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDY0NCddLFxuICAgICAgICBbJ1xcdTA2MjcnLCAnXFx1MDYyMyddLFxuICAgICAgICBbJ1xcdTA2MmEnLCAnXFx1MDY0MCddLFxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDYwYyddLFxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFxcXCddLFxuICAgICAgICBbJ1xcdTA2YWYnLCAnOiddLFxuICAgICAgICBbJ1xcdTA2NDMnLCAnXCInXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDYzOCcsICd+J10sXG4gICAgICAgIFsnXFx1MDYzNycsICdcXHUwNjUyJ10sXG4gICAgICAgIFsnXFx1MDYzMicsICd9J10sXG4gICAgICAgIFsnXFx1MDYzMScsICd7J10sXG4gICAgICAgIFsnXFx1MDYzMCcsICdcXHUwNjQ0J10sXG4gICAgICAgIFsnXFx1MDYyZicsICdcXHUwNjIyJ10sXG4gICAgICAgIFsnXFx1MDYyNicsICdcXHUwNjIxJ10sXG4gICAgICAgIFsnXFx1MDY0OCcsICcsJ10sXG4gICAgICAgIFsnLicsICcuJ10sXG4gICAgICAgIFsnLycsICdcXHUwNjFmJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnZmEnXVxuICB9LFxuICAnRlxcdTAwZjhyb3lza3QnOiB7XG4gICAgJ25hbWUnOiAnRmFlcm9lc2UnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAwQkQnLCAnXFx1MDBBNyddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMEEzJ10sXG4gICAgICAgIFsnNCcsICdcXHUwMEE0JywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBBQyddLFxuICAgICAgICBbJzYnLCAnJiddLFxuICAgICAgICBbJzcnLCAnLycsICd7J10sXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxuICAgICAgICBbJzAnLCAnPScsICd9J10sXG4gICAgICAgIFsnKycsICc/J10sXG4gICAgICAgIFsnXFx1MDBCNCcsICdgJywgJ3wnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMEU1JywgJ1xcdTAwQzUnLCAnXFx1MDBBOCddLFxuICAgICAgICBbJ1xcdTAwRjAnLCAnXFx1MDBEMCcsICd+J10sXG4gICAgICAgIFsnXFwnJywgJyonXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnXFx1MDBFNicsICdcXHUwMEM2J10sXG4gICAgICAgIFsnXFx1MDBGOCcsICdcXHUwMEQ4JywgJ14nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+JywgJ1xcXFwnXSxcbiAgICAgICAgWyd6JywgJ1onXSxcbiAgICAgICAgWyd4JywgJ1gnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBCNSddLFxuICAgICAgICBbJywnLCAnOyddLFxuICAgICAgICBbJy4nLCAnOiddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnZm8nXVxuICB9LFxuICAnRnJhblxcdTAwZTdhaXMnOiB7XG4gICAgJ25hbWUnOiAnRnJlbmNoJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwMGIyJywgJ1xcdTAwYjMnXSxcbiAgICAgICAgWycmJywgJzEnXSxcbiAgICAgICAgWydcXHUwMGU5JywgJzInLCAnfiddLFxuICAgICAgICBbJ1wiJywgJzMnLCAnIyddLFxuICAgICAgICBbJ1xcJycsICc0JywgJ3snXSxcbiAgICAgICAgWycoJywgJzUnLCAnWyddLFxuICAgICAgICBbJy0nLCAnNicsICd8J10sXG4gICAgICAgIFsnXFx1MDBlOCcsICc3JywgJ2AnXSxcbiAgICAgICAgWydfJywgJzgnLCAnXFxcXCddLFxuICAgICAgICBbJ1xcdTAwZTcnLCAnOScsICdeJ10sXG4gICAgICAgIFsnXFx1MDBlMCcsICcwJywgJ0AnXSxcbiAgICAgICAgWycpJywgJ1xcdTAwYjAnLCAnXSddLFxuICAgICAgICBbJz0nLCAnKycsICd9J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXicsICdcXHUwMGE4J10sXG4gICAgICAgIFsnJCcsICdcXHUwMGEzJywgJ1xcdTAwYTQnXSxcbiAgICAgICAgWycqJywgJ1xcdTAzYmMnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnXFx1MDBmOScsICclJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPiddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJywnLCAnPyddLFxuICAgICAgICBbJzsnLCAnLiddLFxuICAgICAgICBbJzonLCAnLyddLFxuICAgICAgICBbJyEnLCAnXFx1MDBhNyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnZnInXVxuICB9LFxuICAnR2FlaWxnZSc6IHtcbiAgICAnbmFtZSc6ICdJcmlzaCAvIEdhZWxpYycsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICdcXHUwMEFDJywgJ1xcdTAwQTYnLCAnXFx1MDBBNiddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInXSxcbiAgICAgICAgWyczJywgJ1xcdTAwQTMnXSxcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MjBBQyddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnXiddLFxuICAgICAgICBbJzcnLCAnJiddLFxuICAgICAgICBbJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCddLFxuICAgICAgICBbJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MDBFOScsICdcXHUwMEM5J10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJywgJ1xcdTAwRkQnLCAnXFx1MDBERCddLFxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMEZBJywgJ1xcdTAwREEnXSxcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBFRCcsICdcXHUwMENEJ10sXG4gICAgICAgIFsnbycsICdPJywgJ1xcdTAwRjMnLCAnXFx1MDBEMyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1snLCAneyddLFxuICAgICAgICBbJ10nLCAnfSddLFxuICAgICAgICBbJyMnLCAnfiddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBFMScsICdcXHUwMEMxJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnOycsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ0AnLCAnXFx1MDBCNCcsICdgJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJywnLCAnPCddLFxuICAgICAgICBbJy4nLCAnPiddLFxuICAgICAgICBbJy8nLCAnPyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnZ2EnLCAnZ2QnXVxuICB9LFxuICAnXFx1MGE5N1xcdTBhYzFcXHUwYTljXFx1MGFiMFxcdTBhYmVcXHUwYWE0XFx1MGFjMCc6IHtcbiAgICAnbmFtZSc6ICdHdWphcmF0aScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnJ10sXG4gICAgICAgIFsnMScsICdcXHUwQThEJywgJ1xcdTBBRTcnXSxcbiAgICAgICAgWycyJywgJ1xcdTBBQzUnLCAnXFx1MEFFOCddLFxuICAgICAgICBbJzMnLCAnXFx1MEFDRFxcdTBBQjAnLCAnXFx1MEFFOSddLFxuICAgICAgICBbJzQnLCAnXFx1MEFCMFxcdTBBQ0QnLCAnXFx1MEFFQSddLFxuICAgICAgICBbJzUnLCAnXFx1MEE5Q1xcdTBBQ0RcXHUwQTlFJywgJ1xcdTBBRUInXSxcbiAgICAgICAgWyc2JywgJ1xcdTBBQTRcXHUwQUNEXFx1MEFCMCcsICdcXHUwQUVDJ10sXG4gICAgICAgIFsnNycsICdcXHUwQTk1XFx1MEFDRFxcdTBBQjcnLCAnXFx1MEFFRCddLFxuICAgICAgICBbJzgnLCAnXFx1MEFCNlxcdTBBQ0RcXHUwQUIwJywgJ1xcdTBBRUUnXSxcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MEFFRiddLFxuICAgICAgICBbJzAnLCAnKScsICdcXHUwQUU2J10sXG4gICAgICAgIFsnLScsICdcXHUwQTgzJ10sXG4gICAgICAgIFsnXFx1MEFDMycsICdcXHUwQThCJywgJ1xcdTBBQzQnLCAnXFx1MEFFMCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwQUNDJywgJ1xcdTBBOTQnXSxcbiAgICAgICAgWydcXHUwQUM4JywgJ1xcdTBBOTAnXSxcbiAgICAgICAgWydcXHUwQUJFJywgJ1xcdTBBODYnXSxcbiAgICAgICAgWydcXHUwQUMwJywgJ1xcdTBBODgnXSxcbiAgICAgICAgWydcXHUwQUMyJywgJ1xcdTBBOEEnXSxcbiAgICAgICAgWydcXHUwQUFDJywgJ1xcdTBBQUQnXSxcbiAgICAgICAgWydcXHUwQUI5JywgJ1xcdTBBOTknXSxcbiAgICAgICAgWydcXHUwQTk3JywgJ1xcdTBBOTgnXSxcbiAgICAgICAgWydcXHUwQUE2JywgJ1xcdTBBQTcnXSxcbiAgICAgICAgWydcXHUwQTlDJywgJ1xcdTBBOUQnXSxcbiAgICAgICAgWydcXHUwQUExJywgJ1xcdTBBQTInXSxcbiAgICAgICAgWydcXHUwQUJDJywgJ1xcdTBBOUUnXSxcbiAgICAgICAgWydcXHUwQUM5JywgJ1xcdTBBOTEnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MEFDQicsICdcXHUwQTkzJ10sXG4gICAgICAgIFsnXFx1MEFDNycsICdcXHUwQThGJ10sXG4gICAgICAgIFsnXFx1MEFDRCcsICdcXHUwQTg1J10sXG4gICAgICAgIFsnXFx1MEFCRicsICdcXHUwQTg3J10sXG4gICAgICAgIFsnXFx1MEFDMScsICdcXHUwQTg5J10sXG4gICAgICAgIFsnXFx1MEFBQScsICdcXHUwQUFCJ10sXG4gICAgICAgIFsnXFx1MEFCMCddLFxuICAgICAgICBbJ1xcdTBBOTUnLCAnXFx1MEE5NiddLFxuICAgICAgICBbJ1xcdTBBQTQnLCAnXFx1MEFBNSddLFxuICAgICAgICBbJ1xcdTBBOUEnLCAnXFx1MEE5QiddLFxuICAgICAgICBbJ1xcdTBBOUYnLCAnXFx1MEFBMCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWycnXSxcbiAgICAgICAgWydcXHUwQTgyJywgJ1xcdTBBODEnLCAnJywgJ1xcdTBBRDAnXSxcbiAgICAgICAgWydcXHUwQUFFJywgJ1xcdTBBQTMnXSxcbiAgICAgICAgWydcXHUwQUE4J10sXG4gICAgICAgIFsnXFx1MEFCNSddLFxuICAgICAgICBbJ1xcdTBBQjInLCAnXFx1MEFCMyddLFxuICAgICAgICBbJ1xcdTBBQjgnLCAnXFx1MEFCNiddLFxuICAgICAgICBbJywnLCAnXFx1MEFCNyddLFxuICAgICAgICBbJy4nLCAnXFx1MDk2NCcsICdcXHUwOTY1JywgJ1xcdTBBQkQnXSxcbiAgICAgICAgWydcXHUwQUFGJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydndSddXG4gIH0sXG4gICdcXHUwNWUyXFx1MDVkMVxcdTA1ZThcXHUwNWQ5XFx1MDVlYSc6IHtcbiAgICAnbmFtZSc6ICdIZWJyZXcnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ34nLCAnYCddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUyMGFhJ10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICdeJ10sXG4gICAgICAgIFsnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcpJ10sXG4gICAgICAgIFsnMCcsICcoJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJy8nLCAnUSddLFxuICAgICAgICBbJ1xcJycsICdXJ10sXG4gICAgICAgIFsnXFx1MDVlNycsICdFJywgJ1xcdTIwYWMnXSxcbiAgICAgICAgWydcXHUwNWU4JywgJ1InXSxcbiAgICAgICAgWydcXHUwNWQwJywgJ1QnXSxcbiAgICAgICAgWydcXHUwNWQ4JywgJ1knXSxcbiAgICAgICAgWydcXHUwNWQ1JywgJ1UnLCAnXFx1MDVmMCddLFxuICAgICAgICBbJ1xcdTA1ZGYnLCAnSSddLFxuICAgICAgICBbJ1xcdTA1ZGQnLCAnTyddLFxuICAgICAgICBbJ1xcdTA1ZTQnLCAnUCddLFxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA1ZTknLCAnQSddLFxuICAgICAgICBbJ1xcdTA1ZDMnLCAnUyddLFxuICAgICAgICBbJ1xcdTA1ZDInLCAnRCddLFxuICAgICAgICBbJ1xcdTA1ZGInLCAnRiddLFxuICAgICAgICBbJ1xcdTA1ZTInLCAnRyddLFxuICAgICAgICBbJ1xcdTA1ZDknLCAnSCcsICdcXHUwNWYyJ10sXG4gICAgICAgIFsnXFx1MDVkNycsICdKJywgJ1xcdTA1ZjEnXSxcbiAgICAgICAgWydcXHUwNWRjJywgJ0snXSxcbiAgICAgICAgWydcXHUwNWRhJywgJ0wnXSxcbiAgICAgICAgWydcXHUwNWUzJywgJzonXSxcbiAgICAgICAgWycsJywgJ1wiJ10sXG4gICAgICAgIFsnXScsICd9J10sXG4gICAgICAgIFsnWycsICd7J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwNWQ2JywgJ1onXSxcbiAgICAgICAgWydcXHUwNWUxJywgJ1gnXSxcbiAgICAgICAgWydcXHUwNWQxJywgJ0MnXSxcbiAgICAgICAgWydcXHUwNWQ0JywgJ1YnXSxcbiAgICAgICAgWydcXHUwNWUwJywgJ0InXSxcbiAgICAgICAgWydcXHUwNWRlJywgJ04nXSxcbiAgICAgICAgWydcXHUwNWU2JywgJ00nXSxcbiAgICAgICAgWydcXHUwNWVhJywgJz4nXSxcbiAgICAgICAgWydcXHUwNWU1JywgJzwnXSxcbiAgICAgICAgWycuJywgJz8nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2hlJ11cbiAgfSxcbiAgJ1xcdTA5MjZcXHUwOTQ3XFx1MDkzNVxcdTA5MjhcXHUwOTNlXFx1MDkxN1xcdTA5MzBcXHUwOTQwJzoge1xuICAgICduYW1lJzogJ0RldmFuYWdhcmknLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTA5NEEnLCAnXFx1MDkxMiddLFxuICAgICAgICBbJzEnLCAnXFx1MDkwRCcsICdcXHUwOTY3J10sXG4gICAgICAgIFsnMicsICdcXHUwOTQ1JywgJ1xcdTA5NjgnXSxcbiAgICAgICAgWyczJywgJ1xcdTA5NERcXHUwOTMwJywgJ1xcdTA5NjknXSxcbiAgICAgICAgWyc0JywgJ1xcdTA5MzBcXHUwOTREJywgJ1xcdTA5NkEnXSxcbiAgICAgICAgWyc1JywgJ1xcdTA5MUNcXHUwOTREXFx1MDkxRScsICdcXHUwOTZCJ10sXG4gICAgICAgIFsnNicsICdcXHUwOTI0XFx1MDk0RFxcdTA5MzAnLCAnXFx1MDk2QyddLFxuICAgICAgICBbJzcnLCAnXFx1MDkxNVxcdTA5NERcXHUwOTM3JywgJ1xcdTA5NkQnXSxcbiAgICAgICAgWyc4JywgJ1xcdTA5MzZcXHUwOTREXFx1MDkzMCcsICdcXHUwOTZFJ10sXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTA5NkYnXSxcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDk2NiddLFxuICAgICAgICBbJy0nLCAnXFx1MDkwMyddLFxuICAgICAgICBbJ1xcdTA5NDMnLCAnXFx1MDkwQicsICdcXHUwOTQ0JywgJ1xcdTA5NjAnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDk0QycsICdcXHUwOTE0J10sXG4gICAgICAgIFsnXFx1MDk0OCcsICdcXHUwOTEwJ10sXG4gICAgICAgIFsnXFx1MDkzRScsICdcXHUwOTA2J10sXG4gICAgICAgIFsnXFx1MDk0MCcsICdcXHUwOTA4JywgJ1xcdTA5NjMnLCAnXFx1MDk2MSddLFxuICAgICAgICBbJ1xcdTA5NDInLCAnXFx1MDkwQSddLFxuICAgICAgICBbJ1xcdTA5MkMnLCAnXFx1MDkyRCddLFxuICAgICAgICBbJ1xcdTA5MzknLCAnXFx1MDkxOSddLFxuICAgICAgICBbJ1xcdTA5MTcnLCAnXFx1MDkxOCcsICdcXHUwOTVBJ10sXG4gICAgICAgIFsnXFx1MDkyNicsICdcXHUwOTI3J10sXG4gICAgICAgIFsnXFx1MDkxQycsICdcXHUwOTFEJywgJ1xcdTA5NUInXSxcbiAgICAgICAgWydcXHUwOTIxJywgJ1xcdTA5MjInLCAnXFx1MDk1QycsICdcXHUwOTVEJ10sXG4gICAgICAgIFsnXFx1MDkzQycsICdcXHUwOTFFJ10sXG4gICAgICAgIFsnXFx1MDk0OScsICdcXHUwOTExJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA5NEInLCAnXFx1MDkxMyddLFxuICAgICAgICBbJ1xcdTA5NDcnLCAnXFx1MDkwRiddLFxuICAgICAgICBbJ1xcdTA5NEQnLCAnXFx1MDkwNSddLFxuICAgICAgICBbJ1xcdTA5M0YnLCAnXFx1MDkwNycsICdcXHUwOTYyJywgJ1xcdTA5MEMnXSxcbiAgICAgICAgWydcXHUwOTQxJywgJ1xcdTA5MDknXSxcbiAgICAgICAgWydcXHUwOTJBJywgJ1xcdTA5MkInLCAnJywgJ1xcdTA5NUUnXSxcbiAgICAgICAgWydcXHUwOTMwJywgJ1xcdTA5MzEnXSxcbiAgICAgICAgWydcXHUwOTE1JywgJ1xcdTA5MTYnLCAnXFx1MDk1OCcsICdcXHUwOTU5J10sXG4gICAgICAgIFsnXFx1MDkyNCcsICdcXHUwOTI1J10sXG4gICAgICAgIFsnXFx1MDkxQScsICdcXHUwOTFCJywgJ1xcdTA5NTInXSxcbiAgICAgICAgWydcXHUwOTFGJywgJ1xcdTA5MjAnLCAnJywgJ1xcdTA5NTEnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDk0NicsICdcXHUwOTBFJywgJ1xcdTA5NTMnXSxcbiAgICAgICAgWydcXHUwOTAyJywgJ1xcdTA5MDEnLCAnJywgJ1xcdTA5NTAnXSxcbiAgICAgICAgWydcXHUwOTJFJywgJ1xcdTA5MjMnLCAnXFx1MDk1NCddLFxuICAgICAgICBbJ1xcdTA5MjgnLCAnXFx1MDkyOSddLFxuICAgICAgICBbJ1xcdTA5MzUnLCAnXFx1MDkzNCddLFxuICAgICAgICBbJ1xcdTA5MzInLCAnXFx1MDkzMyddLFxuICAgICAgICBbJ1xcdTA5MzgnLCAnXFx1MDkzNiddLFxuICAgICAgICBbJywnLCAnXFx1MDkzNycsICdcXHUwOTcwJ10sXG4gICAgICAgIFsnLicsICdcXHUwOTY0JywgJ1xcdTA5NjUnLCAnXFx1MDkzRCddLFxuICAgICAgICBbJ1xcdTA5MkYnLCAnXFx1MDk1RiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnaGktREVWQSddXG4gIH0sXG4gICdcXHUwOTM5XFx1MDkzZlxcdTA5MDJcXHUwOTI2XFx1MDk0MCc6IHtcbiAgICAnbmFtZSc6ICdIaW5kaScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MjAwZCcsICdcXHUyMDBjJywgJ2AnLCAnfiddLFxuICAgICAgICBbJzEnLCAnXFx1MDkwRCcsICdcXHUwOTY3JywgJyEnXSxcbiAgICAgICAgWycyJywgJ1xcdTA5NDUnLCAnXFx1MDk2OCcsICdAJ10sXG4gICAgICAgIFsnMycsICdcXHUwOTREXFx1MDkzMCcsICdcXHUwOTY5JywgJyMnXSxcbiAgICAgICAgWyc0JywgJ1xcdTA5MzBcXHUwOTREJywgJ1xcdTA5NkEnLCAnJCddLFxuICAgICAgICBbJzUnLCAnXFx1MDkxQ1xcdTA5NERcXHUwOTFFJywgJ1xcdTA5NkInLCAnJSddLFxuICAgICAgICBbJzYnLCAnXFx1MDkyNFxcdTA5NERcXHUwOTMwJywgJ1xcdTA5NkMnLCAnXiddLFxuICAgICAgICBbJzcnLCAnXFx1MDkxNVxcdTA5NERcXHUwOTM3JywgJ1xcdTA5NkQnLCAnJiddLFxuICAgICAgICBbJzgnLCAnXFx1MDkzNlxcdTA5NERcXHUwOTMwJywgJ1xcdTA5NkUnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUwOTZGJywgJygnXSxcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDk2NicsICcpJ10sXG4gICAgICAgIFsnLScsICdcXHUwOTAzJywgJy0nLCAnXyddLFxuICAgICAgICBbJ1xcdTA5NDMnLCAnXFx1MDkwQicsICc9JywgJysnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDk0QycsICdcXHUwOTE0J10sXG4gICAgICAgIFsnXFx1MDk0OCcsICdcXHUwOTEwJ10sXG4gICAgICAgIFsnXFx1MDkzRScsICdcXHUwOTA2J10sXG4gICAgICAgIFsnXFx1MDk0MCcsICdcXHUwOTA4J10sXG4gICAgICAgIFsnXFx1MDk0MicsICdcXHUwOTBBJ10sXG4gICAgICAgIFsnXFx1MDkyQycsICdcXHUwOTJEJ10sXG4gICAgICAgIFsnXFx1MDkzOScsICdcXHUwOTE5J10sXG4gICAgICAgIFsnXFx1MDkxNycsICdcXHUwOTE4J10sXG4gICAgICAgIFsnXFx1MDkyNicsICdcXHUwOTI3J10sXG4gICAgICAgIFsnXFx1MDkxQycsICdcXHUwOTFEJ10sXG4gICAgICAgIFsnXFx1MDkyMScsICdcXHUwOTIyJywgJ1snLCAneyddLFxuICAgICAgICBbJ1xcdTA5M0MnLCAnXFx1MDkxRScsICddJywgJ30nXSxcbiAgICAgICAgWydcXHUwOTQ5JywgJ1xcdTA5MTEnLCAnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA5NEInLCAnXFx1MDkxMyddLFxuICAgICAgICBbJ1xcdTA5NDcnLCAnXFx1MDkwRiddLFxuICAgICAgICBbJ1xcdTA5NEQnLCAnXFx1MDkwNSddLFxuICAgICAgICBbJ1xcdTA5M0YnLCAnXFx1MDkwNyddLFxuICAgICAgICBbJ1xcdTA5NDEnLCAnXFx1MDkwOSddLFxuICAgICAgICBbJ1xcdTA5MkEnLCAnXFx1MDkyQiddLFxuICAgICAgICBbJ1xcdTA5MzAnLCAnXFx1MDkzMSddLFxuICAgICAgICBbJ1xcdTA5MTUnLCAnXFx1MDkxNiddLFxuICAgICAgICBbJ1xcdTA5MjQnLCAnXFx1MDkyNSddLFxuICAgICAgICBbJ1xcdTA5MUEnLCAnXFx1MDkxQicsICc7JywgJzonXSxcbiAgICAgICAgWydcXHUwOTFGJywgJ1xcdTA5MjAnLCAnXFwnJywgJ1wiJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJyddLFxuICAgICAgICBbJ1xcdTA5MDInLCAnXFx1MDkwMScsICcnLCAnXFx1MDk1MCddLFxuICAgICAgICBbJ1xcdTA5MkUnLCAnXFx1MDkyMyddLFxuICAgICAgICBbJ1xcdTA5MjgnXSxcbiAgICAgICAgWydcXHUwOTM1J10sXG4gICAgICAgIFsnXFx1MDkzMicsICdcXHUwOTMzJ10sXG4gICAgICAgIFsnXFx1MDkzOCcsICdcXHUwOTM2J10sXG4gICAgICAgIFsnLCcsICdcXHUwOTM3JywgJywnLCAnPCddLFxuICAgICAgICBbJy4nLCAnXFx1MDk2NCcsICcuJywgJz4nXSxcbiAgICAgICAgWydcXHUwOTJGJywgJ1xcdTA5NUYnLCAnLycsICc/J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydoaSddXG4gIH0sXG4gICdcXHUwNTQwXFx1MDU2MVxcdTA1NzVcXHUwNTY1XFx1MDU4MFxcdTA1NjVcXHUwNTc2IFxcdTA1NjFcXHUwNTgwXFx1MDU2NVxcdTA1ODJcXHUwNTc0XFx1MDU3OFxcdTA1ODJcXHUwNTdmXFx1MDU4NCc6IHtcbiAgICAnbmFtZSc6ICdXZXN0ZXJuIEFybWVuaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwNTVEJywgJ1xcdTA1NUMnXSxcbiAgICAgICAgWyc6JywgJzEnXSxcbiAgICAgICAgWydcXHUwNTcxJywgJ1xcdTA1NDEnXSxcbiAgICAgICAgWydcXHUwNTc1JywgJ1xcdTA1NDUnXSxcbiAgICAgICAgWydcXHUwNTVCJywgJzMnXSxcbiAgICAgICAgWycsJywgJzQnXSxcbiAgICAgICAgWyctJywgJzknXSxcbiAgICAgICAgWycuJywgJ1xcdTA1ODcnXSxcbiAgICAgICAgWydcXHUwMEFCJywgJygnXSxcbiAgICAgICAgWydcXHUwMEJCJywgJyknXSxcbiAgICAgICAgWydcXHUwNTg1JywgJ1xcdTA1NTUnXSxcbiAgICAgICAgWydcXHUwNTdDJywgJ1xcdTA1NEMnXSxcbiAgICAgICAgWydcXHUwNTZBJywgJ1xcdTA1M0EnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDU2RCcsICdcXHUwNTNEJ10sXG4gICAgICAgIFsnXFx1MDU3RScsICdcXHUwNTRFJ10sXG4gICAgICAgIFsnXFx1MDU2NycsICdcXHUwNTM3J10sXG4gICAgICAgIFsnXFx1MDU4MCcsICdcXHUwNTUwJ10sXG4gICAgICAgIFsnXFx1MDU2NCcsICdcXHUwNTM0J10sXG4gICAgICAgIFsnXFx1MDU2NScsICdcXHUwNTM1J10sXG4gICAgICAgIFsnXFx1MDU2OCcsICdcXHUwNTM4J10sXG4gICAgICAgIFsnXFx1MDU2QicsICdcXHUwNTNCJ10sXG4gICAgICAgIFsnXFx1MDU3OCcsICdcXHUwNTQ4J10sXG4gICAgICAgIFsnXFx1MDU2MicsICdcXHUwNTMyJ10sXG4gICAgICAgIFsnXFx1MDU3OScsICdcXHUwNTQ5J10sXG4gICAgICAgIFsnXFx1MDU3QicsICdcXHUwNTRCJ10sXG4gICAgICAgIFsnXFwnJywgJ1xcdTA1NUUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDU2MScsICdcXHUwNTMxJ10sXG4gICAgICAgIFsnXFx1MDU3RCcsICdcXHUwNTREJ10sXG4gICAgICAgIFsnXFx1MDU3RicsICdcXHUwNTRGJ10sXG4gICAgICAgIFsnXFx1MDU4NicsICdcXHUwNTU2J10sXG4gICAgICAgIFsnXFx1MDU2RicsICdcXHUwNTNGJ10sXG4gICAgICAgIFsnXFx1MDU3MCcsICdcXHUwNTQwJ10sXG4gICAgICAgIFsnXFx1MDU3MycsICdcXHUwNTQzJ10sXG4gICAgICAgIFsnXFx1MDU4NCcsICdcXHUwNTU0J10sXG4gICAgICAgIFsnXFx1MDU2QycsICdcXHUwNTNDJ10sXG4gICAgICAgIFsnXFx1MDU2OScsICdcXHUwNTM5J10sXG4gICAgICAgIFsnXFx1MDU4MycsICdcXHUwNTUzJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTA1NjYnLCAnXFx1MDUzNiddLFxuICAgICAgICBbJ1xcdTA1ODEnLCAnXFx1MDU1MSddLFxuICAgICAgICBbJ1xcdTA1NjMnLCAnXFx1MDUzMyddLFxuICAgICAgICBbJ1xcdTA1ODInLCAnXFx1MDU1MiddLFxuICAgICAgICBbJ1xcdTA1N0EnLCAnXFx1MDU0QSddLFxuICAgICAgICBbJ1xcdTA1NzYnLCAnXFx1MDU0NiddLFxuICAgICAgICBbJ1xcdTA1NzQnLCAnXFx1MDU0NCddLFxuICAgICAgICBbJ1xcdTA1NzcnLCAnXFx1MDU0NyddLFxuICAgICAgICBbJ1xcdTA1NzInLCAnXFx1MDU0MiddLFxuICAgICAgICBbJ1xcdTA1NkUnLCAnXFx1MDUzRSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2h5LUFSRVZNQVRBJ11cbiAgfSxcbiAgJ1xcdTA1NDBcXHUwNTYxXFx1MDU3NVxcdTA1NjVcXHUwNTgwXFx1MDU2NVxcdTA1NzYgXFx1MDU2MVxcdTA1ODBcXHUwNTY1XFx1MDU4MlxcdTA1NjVcXHUwNTZjXFx1MDU4NCc6IHtcbiAgICAnbmFtZSc6ICdFYXN0ZXJuIEFybWVuaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwNTVEJywgJ1xcdTA1NUMnXSxcbiAgICAgICAgWyc6JywgJzEnXSxcbiAgICAgICAgWydcXHUwNTcxJywgJ1xcdTA1NDEnXSxcbiAgICAgICAgWydcXHUwNTc1JywgJ1xcdTA1NDUnXSxcbiAgICAgICAgWydcXHUwNTVCJywgJzMnXSxcbiAgICAgICAgWycsJywgJzQnXSxcbiAgICAgICAgWyctJywgJzknXSxcbiAgICAgICAgWycuJywgJ1xcdTA1ODcnXSxcbiAgICAgICAgWydcXHUwMEFCJywgJygnXSxcbiAgICAgICAgWydcXHUwMEJCJywgJyknXSxcbiAgICAgICAgWydcXHUwNTg1JywgJ1xcdTA1NTUnXSxcbiAgICAgICAgWydcXHUwNTdDJywgJ1xcdTA1NEMnXSxcbiAgICAgICAgWydcXHUwNTZBJywgJ1xcdTA1M0EnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDU2RCcsICdcXHUwNTNEJ10sXG4gICAgICAgIFsnXFx1MDU4MicsICdcXHUwNTUyJ10sXG4gICAgICAgIFsnXFx1MDU2NycsICdcXHUwNTM3J10sXG4gICAgICAgIFsnXFx1MDU4MCcsICdcXHUwNTUwJ10sXG4gICAgICAgIFsnXFx1MDU3RicsICdcXHUwNTRGJ10sXG4gICAgICAgIFsnXFx1MDU2NScsICdcXHUwNTM1J10sXG4gICAgICAgIFsnXFx1MDU2OCcsICdcXHUwNTM4J10sXG4gICAgICAgIFsnXFx1MDU2QicsICdcXHUwNTNCJ10sXG4gICAgICAgIFsnXFx1MDU3OCcsICdcXHUwNTQ4J10sXG4gICAgICAgIFsnXFx1MDU3QScsICdcXHUwNTRBJ10sXG4gICAgICAgIFsnXFx1MDU3OScsICdcXHUwNTQ5J10sXG4gICAgICAgIFsnXFx1MDU3QicsICdcXHUwNTRCJ10sXG4gICAgICAgIFsnXFwnJywgJ1xcdTA1NUUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDU2MScsICdcXHUwNTMxJ10sXG4gICAgICAgIFsnXFx1MDU3RCcsICdcXHUwNTREJ10sXG4gICAgICAgIFsnXFx1MDU2NCcsICdcXHUwNTM0J10sXG4gICAgICAgIFsnXFx1MDU4NicsICdcXHUwNTU2J10sXG4gICAgICAgIFsnXFx1MDU4NCcsICdcXHUwNTU0J10sXG4gICAgICAgIFsnXFx1MDU3MCcsICdcXHUwNTQwJ10sXG4gICAgICAgIFsnXFx1MDU3MycsICdcXHUwNTQzJ10sXG4gICAgICAgIFsnXFx1MDU2RicsICdcXHUwNTNGJ10sXG4gICAgICAgIFsnXFx1MDU2QycsICdcXHUwNTNDJ10sXG4gICAgICAgIFsnXFx1MDU2OScsICdcXHUwNTM5J10sXG4gICAgICAgIFsnXFx1MDU4MycsICdcXHUwNTUzJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTA1NjYnLCAnXFx1MDUzNiddLFxuICAgICAgICBbJ1xcdTA1ODEnLCAnXFx1MDU1MSddLFxuICAgICAgICBbJ1xcdTA1NjMnLCAnXFx1MDUzMyddLFxuICAgICAgICBbJ1xcdTA1N0UnLCAnXFx1MDU0RSddLFxuICAgICAgICBbJ1xcdTA1NjInLCAnXFx1MDUzMiddLFxuICAgICAgICBbJ1xcdTA1NzYnLCAnXFx1MDU0NiddLFxuICAgICAgICBbJ1xcdTA1NzQnLCAnXFx1MDU0NCddLFxuICAgICAgICBbJ1xcdTA1NzcnLCAnXFx1MDU0NyddLFxuICAgICAgICBbJ1xcdTA1NzInLCAnXFx1MDU0MiddLFxuICAgICAgICBbJ1xcdTA1NkUnLCAnXFx1MDUzRSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2h5J11cbiAgfSxcbiAgJ1xcdTAwY2RzbGVuc2thJzoge1xuICAgICduYW1lJzogJ0ljZWxhbmRpYycsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDBCMCcsICdcXHUwMEE4JywgJ1xcdTAwQjAnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJ10sXG4gICAgICAgIFsnMycsICcjJ10sXG4gICAgICAgIFsnNCcsICckJ10sXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWyc2JywgJyYnXSxcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXG4gICAgICAgIFsnOScsICcpJywgJ10nXSxcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxuICAgICAgICBbJ1xcdTAwRjYnLCAnXFx1MDBENicsICdcXFxcJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ3EnLCAnUScsICdAJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMEYwJywgJ1xcdTAwRDAnXSxcbiAgICAgICAgWydcXCcnLCAnPycsICd+J10sXG4gICAgICAgIFsnKycsICcqJywgJ2AnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnXFx1MDBFNicsICdcXHUwMEM2J10sXG4gICAgICAgIFsnXFx1MDBCNCcsICdcXCcnLCAnXiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyc8JywgJz4nLCAnfCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEI1J10sXG4gICAgICAgIFsnLCcsICc7J10sXG4gICAgICAgIFsnLicsICc6J10sXG4gICAgICAgIFsnXFx1MDBGRScsICdcXHUwMERFJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydpcyddXG4gIH0sXG4gICdJdGFsaWFubyc6IHtcbiAgICAnbmFtZSc6ICdJdGFsaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJ10sXG4gICAgICAgIFsnMycsICdcXHUwMGEzJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTIwYWMnXSxcbiAgICAgICAgWyc1JywgJyUnXSxcbiAgICAgICAgWyc2JywgJyYnXSxcbiAgICAgICAgWyc3JywgJy8nXSxcbiAgICAgICAgWyc4JywgJygnXSxcbiAgICAgICAgWyc5JywgJyknXSxcbiAgICAgICAgWycwJywgJz0nXSxcbiAgICAgICAgWydcXCcnLCAnPyddLFxuICAgICAgICBbJ1xcdTAwZWMnLCAnXiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1xcdTAwZTgnLCAnXFx1MDBlOScsICdbJywgJ3snXSxcbiAgICAgICAgWycrJywgJyonLCAnXScsICd9J10sXG4gICAgICAgIFsnXFx1MDBmOScsICdcXHUwMGE3J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ1xcdTAwZjInLCAnXFx1MDBlNycsICdAJ10sXG4gICAgICAgIFsnXFx1MDBlMCcsICdcXHUwMGIwJywgJyMnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+J10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsndicsICdWJ10sXG4gICAgICAgIFsnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnLCcsICc7J10sXG4gICAgICAgIFsnLicsICc6J10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydpdCddXG4gIH0sXG4gICdcXHU2NWU1XFx1NjcyY1xcdThhOWUnOiB7XG4gICAgJ25hbWUnOiAnSmFwYW5lc2UgSGlyYWdhbmEvS2F0YWthbmEnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdWZmNWUnXSxcbiAgICAgICAgWydcXHUzMDZjJywgJ1xcdTMwY2MnXSxcbiAgICAgICAgWydcXHUzMDc1JywgJ1xcdTMwZDUnXSxcbiAgICAgICAgWydcXHUzMDQyJywgJ1xcdTMwYTInLCAnXFx1MzA0MScsICdcXHUzMGExJ10sXG4gICAgICAgIFsnXFx1MzA0NicsICdcXHUzMGE2JywgJ1xcdTMwNDUnLCAnXFx1MzBhNSddLFxuICAgICAgICBbJ1xcdTMwNDgnLCAnXFx1MzBhOCcsICdcXHUzMDQ3JywgJ1xcdTMwYTcnXSxcbiAgICAgICAgWydcXHUzMDRhJywgJ1xcdTMwYWEnLCAnXFx1MzA0OScsICdcXHUzMGE5J10sXG4gICAgICAgIFsnXFx1MzA4NCcsICdcXHUzMGU0JywgJ1xcdTMwODMnLCAnXFx1MzBlMyddLFxuICAgICAgICBbJ1xcdTMwODYnLCAnXFx1MzBlNicsICdcXHUzMDg1JywgJ1xcdTMwZTUnXSxcbiAgICAgICAgWydcXHUzMDg4JywgJ1xcdTMwZTgnLCAnXFx1MzA4NycsICdcXHUzMGU3J10sXG4gICAgICAgIFsnXFx1MzA4ZicsICdcXHUzMGVmJywgJ1xcdTMwOTInLCAnXFx1MzBmMiddLFxuICAgICAgICBbJ1xcdTMwN2InLCAnXFx1MzBkYicsICdcXHUzMGZjJywgJ1xcdWZmMWQnXSxcbiAgICAgICAgWydcXHUzMDc4JywgJ1xcdTMwZDgnLCAnXFx1ZmYzZScsICdcXHVmZjVlJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTMwNWYnLCAnXFx1MzBiZiddLFxuICAgICAgICBbJ1xcdTMwNjYnLCAnXFx1MzBjNiddLFxuICAgICAgICBbJ1xcdTMwNDQnLCAnXFx1MzBhNCcsICdcXHUzMDQzJywgJ1xcdTMwYTMnXSxcbiAgICAgICAgWydcXHUzMDU5JywgJ1xcdTMwYjknXSxcbiAgICAgICAgWydcXHUzMDRiJywgJ1xcdTMwYWInXSxcbiAgICAgICAgWydcXHUzMDkzJywgJ1xcdTMwZjMnXSxcbiAgICAgICAgWydcXHUzMDZhJywgJ1xcdTMwY2EnXSxcbiAgICAgICAgWydcXHUzMDZiJywgJ1xcdTMwY2InXSxcbiAgICAgICAgWydcXHUzMDg5JywgJ1xcdTMwZTknXSxcbiAgICAgICAgWydcXHUzMDViJywgJ1xcdTMwYmInXSxcbiAgICAgICAgWydcXHUzMDAxJywgJ1xcdTMwMDEnLCAnXFx1ZmYyMCcsICdcXHUyMDE4J10sXG4gICAgICAgIFsnXFx1MzAwMicsICdcXHUzMDAyJywgJ1xcdTMwMGMnLCAnXFx1ZmY1YiddLFxuICAgICAgICBbJ1xcdWZmZTUnLCAnJywgJycsICdcXHVmZjBhJ10sXG4gICAgICAgIFsnXFx1MzA5QicsICdcIicsICdcXHVmZmU1JywgJ1xcdWZmNWMnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MzA2MScsICdcXHUzMGMxJ10sXG4gICAgICAgIFsnXFx1MzA2OCcsICdcXHUzMGM4J10sXG4gICAgICAgIFsnXFx1MzA1NycsICdcXHUzMGI3J10sXG4gICAgICAgIFsnXFx1MzA2ZicsICdcXHUzMGNmJ10sXG4gICAgICAgIFsnXFx1MzA0ZCcsICdcXHUzMGFkJ10sXG4gICAgICAgIFsnXFx1MzA0ZicsICdcXHUzMGFmJ10sXG4gICAgICAgIFsnXFx1MzA3ZScsICdcXHUzMGRlJ10sXG4gICAgICAgIFsnXFx1MzA2ZScsICdcXHUzMGNlJ10sXG4gICAgICAgIFsnXFx1MzA4YycsICdcXHUzMGVjJywgJ1xcdWZmMWInLCAnXFx1ZmYwYiddLFxuICAgICAgICBbJ1xcdTMwNTEnLCAnXFx1MzBiMScsICdcXHVmZjFhJywgJ1xcdTMwZjYnXSxcbiAgICAgICAgWydcXHUzMDgwJywgJ1xcdTMwZTAnLCAnXFx1MzAwZCcsICdcXHVmZjVkJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTMwNjQnLCAnXFx1MzBjNCddLFxuICAgICAgICBbJ1xcdTMwNTUnLCAnXFx1MzBiNSddLFxuICAgICAgICBbJ1xcdTMwNWQnLCAnXFx1MzBiZCddLFxuICAgICAgICBbJ1xcdTMwNzInLCAnXFx1MzBkMiddLFxuICAgICAgICBbJ1xcdTMwNTMnLCAnXFx1MzBiMyddLFxuICAgICAgICBbJ1xcdTMwN2YnLCAnXFx1MzBkZiddLFxuICAgICAgICBbJ1xcdTMwODInLCAnXFx1MzBlMiddLFxuICAgICAgICBbJ1xcdTMwNmQnLCAnXFx1MzBjZCcsICdcXHUzMDAxJywgJ1xcdWZmMWMnXSxcbiAgICAgICAgWydcXHUzMDhiJywgJ1xcdTMwZWInLCAnXFx1MzAwMicsICdcXHVmZjFlJ10sXG4gICAgICAgIFsnXFx1MzA4MScsICdcXHUzMGUxJywgJ1xcdTMwZmInLCAnXFx1ZmYxZiddLFxuICAgICAgICBbJ1xcdTMwOGQnLCAnXFx1MzBlZCcsICcnLCAnXFx1ZmYzZiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnamEnXVxuICB9LFxuICAnXFx1MTBlNVxcdTEwZDBcXHUxMGUwXFx1MTBkN1xcdTEwZTNcXHUxMGRhXFx1MTBkOCc6IHtcbiAgICAnbmFtZSc6ICdHZW9yZ2lhbicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MjAxRScsICdcXHUyMDFDJ10sXG4gICAgICAgIFsnIScsICcxJ10sXG4gICAgICAgIFsnPycsICcyJ10sXG4gICAgICAgIFsnXFx1MjExNicsICczJ10sXG4gICAgICAgIFsnXFx1MDBBNycsICc0J10sXG4gICAgICAgIFsnJScsICc1J10sXG4gICAgICAgIFsnOicsICc2J10sXG4gICAgICAgIFsnLicsICc3J10sXG4gICAgICAgIFsnOycsICc4J10sXG4gICAgICAgIFsnLCcsICc5J10sXG4gICAgICAgIFsnLycsICcwJ10sXG4gICAgICAgIFsnXFx1MjAxMycsICctJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTEwRTYnLCAnXFx1MTBFNiddLFxuICAgICAgICBbJ1xcdTEwRUYnLCAnXFx1MTBFRiddLFxuICAgICAgICBbJ1xcdTEwRTMnLCAnXFx1MTBFMyddLFxuICAgICAgICBbJ1xcdTEwRDknLCAnXFx1MTBEOSddLFxuICAgICAgICBbJ1xcdTEwRDQnLCAnXFx1MTBENCcsICdcXHUxMEYxJ10sXG4gICAgICAgIFsnXFx1MTBEQycsICdcXHUxMERDJ10sXG4gICAgICAgIFsnXFx1MTBEMicsICdcXHUxMEQyJ10sXG4gICAgICAgIFsnXFx1MTBFOCcsICdcXHUxMEU4J10sXG4gICAgICAgIFsnXFx1MTBFQycsICdcXHUxMEVDJ10sXG4gICAgICAgIFsnXFx1MTBENicsICdcXHUxMEQ2J10sXG4gICAgICAgIFsnXFx1MTBFRScsICdcXHUxMEVFJywgJ1xcdTEwRjQnXSxcbiAgICAgICAgWydcXHUxMEVBJywgJ1xcdTEwRUEnXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MTBFNCcsICdcXHUxMEU0JywgJ1xcdTEwRjYnXSxcbiAgICAgICAgWydcXHUxMEVCJywgJ1xcdTEwRUInXSxcbiAgICAgICAgWydcXHUxMEQ1JywgJ1xcdTEwRDUnLCAnXFx1MTBGMyddLFxuICAgICAgICBbJ1xcdTEwRDcnLCAnXFx1MTBENyddLFxuICAgICAgICBbJ1xcdTEwRDAnLCAnXFx1MTBEMCddLFxuICAgICAgICBbJ1xcdTEwREUnLCAnXFx1MTBERSddLFxuICAgICAgICBbJ1xcdTEwRTAnLCAnXFx1MTBFMCddLFxuICAgICAgICBbJ1xcdTEwREQnLCAnXFx1MTBERCddLFxuICAgICAgICBbJ1xcdTEwREEnLCAnXFx1MTBEQSddLFxuICAgICAgICBbJ1xcdTEwRDMnLCAnXFx1MTBEMyddLFxuICAgICAgICBbJ1xcdTEwREYnLCAnXFx1MTBERiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUxMEVEJywgJ1xcdTEwRUQnXSxcbiAgICAgICAgWydcXHUxMEU5JywgJ1xcdTEwRTknXSxcbiAgICAgICAgWydcXHUxMEU3JywgJ1xcdTEwRTcnXSxcbiAgICAgICAgWydcXHUxMEUxJywgJ1xcdTEwRTEnXSxcbiAgICAgICAgWydcXHUxMERCJywgJ1xcdTEwREInXSxcbiAgICAgICAgWydcXHUxMEQ4JywgJ1xcdTEwRDgnLCAnXFx1MTBGMiddLFxuICAgICAgICBbJ1xcdTEwRTInLCAnXFx1MTBFMiddLFxuICAgICAgICBbJ1xcdTEwRTUnLCAnXFx1MTBFNSddLFxuICAgICAgICBbJ1xcdTEwRDEnLCAnXFx1MTBEMSddLFxuICAgICAgICBbJ1xcdTEwRjAnLCAnXFx1MTBGMCcsICdcXHUxMEY1J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydrYSddXG4gIH0sXG4gICdcXHUwNDlhXFx1MDQzMFxcdTA0MzdcXHUwNDMwXFx1MDQ5YlxcdTA0NDhcXHUwNDMwJzoge1xuICAgICduYW1lJzogJ0themFraCcsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnKCcsICcpJ10sXG4gICAgICAgIFsnXCInLCAnISddLFxuICAgICAgICBbJ1xcdTA0ZDknLCAnXFx1MDRkOCddLFxuICAgICAgICBbJ1xcdTA0NTYnLCAnXFx1MDQwNiddLFxuICAgICAgICBbJ1xcdTA0YTMnLCAnXFx1MDRhMiddLFxuICAgICAgICBbJ1xcdTA0OTMnLCAnXFx1MDQ5MiddLFxuICAgICAgICBbJywnLCAnOyddLFxuICAgICAgICBbJy4nLCAnOiddLFxuICAgICAgICBbJ1xcdTA0YWYnLCAnXFx1MDRhZSddLFxuICAgICAgICBbJ1xcdTA0YjEnLCAnXFx1MDRiMCddLFxuICAgICAgICBbJ1xcdTA0OWInLCAnXFx1MDQ5YSddLFxuICAgICAgICBbJ1xcdTA0ZTknLCAnXFx1MDRlOCddLFxuICAgICAgICBbJ1xcdTA0YmInLCAnXFx1MDRiYSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcbiAgICAgICAgWydcXHUwNDNBJywgJ1xcdTA0MUEnXSxcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcbiAgICAgICAgWydcXHUwNDNEJywgJ1xcdTA0MUQnXSxcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcbiAgICAgICAgWydcXHUwNDQ5JywgJ1xcdTA0MjknXSxcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcbiAgICAgICAgWydcXHUwNDRBJywgJ1xcdTA0MkEnXSxcbiAgICAgICAgWydcXFxcJywgJy8nXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXG4gICAgICAgIFsnXFx1MDQ0QicsICdcXHUwNDJCJ10sXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J10sXG4gICAgICAgIFsnXFx1MDQ0RCcsICdcXHUwNDJEJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxuICAgICAgICBbJ1xcdTA0NEYnLCAnXFx1MDQyRiddLFxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxuICAgICAgICBbJ1xcdTA0M0MnLCAnXFx1MDQxQyddLFxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxuICAgICAgICBbJ1xcdTA0NEMnLCAnXFx1MDQyQyddLFxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddLFxuICAgICAgICBbJ1xcdTIxMTYnLCAnPyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2trJ11cbiAgfSxcbiAgJ1xcdTE3OTdcXHUxN2I2XFx1MTc5ZlxcdTE3YjZcXHUxNzgxXFx1MTdkMlxcdTE3OThcXHUxN2MyXFx1MTc5YSc6IHtcbiAgICAnbmFtZSc6ICdLaG1lcicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDBBQicsICdcXHUwMEJCJywgJ1xcdTIwMEQnXSxcbiAgICAgICAgWydcXHUxN0UxJywgJyEnLCAnXFx1MjAwQycsICdcXHUxN0YxJ10sXG4gICAgICAgIFsnXFx1MTdFMicsICdcXHUxN0Q3JywgJ0AnLCAnXFx1MTdGMiddLFxuICAgICAgICBbJ1xcdTE3RTMnLCAnXCInLCAnXFx1MTdEMScsICdcXHUxN0YzJ10sXG4gICAgICAgIFsnXFx1MTdFNCcsICdcXHUxN0RCJywgJyQnLCAnXFx1MTdGNCddLFxuICAgICAgICBbJ1xcdTE3RTUnLCAnJScsICdcXHUyMEFDJywgJ1xcdTE3RjUnXSxcbiAgICAgICAgWydcXHUxN0U2JywgJ1xcdTE3Q0QnLCAnXFx1MTdEOScsICdcXHUxN0Y2J10sXG4gICAgICAgIFsnXFx1MTdFNycsICdcXHUxN0QwJywgJ1xcdTE3REEnLCAnXFx1MTdGNyddLFxuICAgICAgICBbJ1xcdTE3RTgnLCAnXFx1MTdDRicsICcqJywgJ1xcdTE3RjgnXSxcbiAgICAgICAgWydcXHUxN0U5JywgJygnLCAneycsICdcXHUxN0Y5J10sXG4gICAgICAgIFsnXFx1MTdFMCcsICcpJywgJ30nLCAnXFx1MTdGMCddLFxuICAgICAgICBbJ1xcdTE3QTUnLCAnXFx1MTdDQycsICd4J10sXG4gICAgICAgIFsnXFx1MTdCMicsICc9JywgJ1xcdTE3Q0UnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MTc4NicsICdcXHUxNzg4JywgJ1xcdTE3REMnLCAnXFx1MTlFMCddLFxuICAgICAgICBbJ1xcdTE3QjknLCAnXFx1MTdCQScsICdcXHUxN0REJywgJ1xcdTE5RTEnXSxcbiAgICAgICAgWydcXHUxN0MxJywgJ1xcdTE3QzInLCAnXFx1MTdBRicsICdcXHUxOUUyJ10sXG4gICAgICAgIFsnXFx1MTc5QScsICdcXHUxN0FDJywgJ1xcdTE3QUInLCAnXFx1MTlFMyddLFxuICAgICAgICBbJ1xcdTE3OEYnLCAnXFx1MTc5MScsICdcXHUxN0E4JywgJ1xcdTE5RTQnXSxcbiAgICAgICAgWydcXHUxNzk5JywgJ1xcdTE3QkQnLCAnXFx1MTc5OVxcdTE3QkVcXHUxNzg0JywgJ1xcdTE5RTUnXSxcbiAgICAgICAgWydcXHUxN0JCJywgJ1xcdTE3QkMnLCAnJywgJ1xcdTE5RTYnXSxcbiAgICAgICAgWydcXHUxN0I3JywgJ1xcdTE3QjgnLCAnXFx1MTdBNicsICdcXHUxOUU3J10sXG4gICAgICAgIFsnXFx1MTdDNCcsICdcXHUxN0M1JywgJ1xcdTE3QjEnLCAnXFx1MTlFOCddLFxuICAgICAgICBbJ1xcdTE3OTUnLCAnXFx1MTc5NycsICdcXHUxN0IwJywgJ1xcdTE5RTknXSxcbiAgICAgICAgWydcXHUxN0MwJywgJ1xcdTE3QkYnLCAnXFx1MTdBOScsICdcXHUxOUVBJ10sXG4gICAgICAgIFsnXFx1MTdBQScsICdcXHUxN0E3JywgJ1xcdTE3QjMnLCAnXFx1MTlFQiddLFxuICAgICAgICBbJ1xcdTE3QUUnLCAnXFx1MTdBRCcsICdcXFxcJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTE3QjYnLCAnXFx1MTdCNlxcdTE3QzYnLCAnXFx1MTdCNScsICdcXHUxOUVDJ10sXG4gICAgICAgIFsnXFx1MTc5RicsICdcXHUxN0MzJywgJycsICdcXHUxOUVEJ10sXG4gICAgICAgIFsnXFx1MTc4QScsICdcXHUxNzhDJywgJ1xcdTE3RDMnLCAnXFx1MTlFRSddLFxuICAgICAgICBbJ1xcdTE3OTAnLCAnXFx1MTc5MicsICcnLCAnXFx1MTlFRiddLFxuICAgICAgICBbJ1xcdTE3ODQnLCAnXFx1MTdBMicsICdcXHUxN0E0JywgJ1xcdTE5RjAnXSxcbiAgICAgICAgWydcXHUxN0EwJywgJ1xcdTE3QzcnLCAnXFx1MTdBMycsICdcXHUxOUYxJ10sXG4gICAgICAgIFsnXFx1MTdEMicsICdcXHUxNzg5JywgJ1xcdTE3QjQnLCAnXFx1MTlGMiddLFxuICAgICAgICBbJ1xcdTE3ODAnLCAnXFx1MTc4MicsICdcXHUxNzlEJywgJ1xcdTE5RjMnXSxcbiAgICAgICAgWydcXHUxNzlCJywgJ1xcdTE3QTEnLCAnXFx1MTdEOCcsICdcXHUxOUY0J10sXG4gICAgICAgIFsnXFx1MTdCRScsICdcXHUxN0M0XFx1MTdDNycsICdcXHUxN0Q2JywgJ1xcdTE5RjUnXSxcbiAgICAgICAgWydcXHUxN0NCJywgJ1xcdTE3QzknLCAnXFx1MTdDOCcsICdcXHUxOUY2J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTE3OEInLCAnXFx1MTc4RCcsICd8JywgJ1xcdTE5RjcnXSxcbiAgICAgICAgWydcXHUxNzgxJywgJ1xcdTE3ODMnLCAnXFx1MTc4MVxcdTE3RDJcXHUxNzg5XFx1MTdCQlxcdTE3QzYnLCAnXFx1MTlGOCddLFxuICAgICAgICBbJ1xcdTE3ODUnLCAnXFx1MTc4NycsICctJywgJ1xcdTE5RjknXSxcbiAgICAgICAgWydcXHUxNzlDJywgJ1xcdTE3QzFcXHUxN0M3JywgJysnLCAnXFx1MTlGQSddLFxuICAgICAgICBbJ1xcdTE3OTQnLCAnXFx1MTc5NicsICdcXHUxNzlFJywgJ1xcdTE5RkInXSxcbiAgICAgICAgWydcXHUxNzkzJywgJ1xcdTE3OEUnLCAnWycsICdcXHUxOUZDJ10sXG4gICAgICAgIFsnXFx1MTc5OCcsICdcXHUxN0M2JywgJ10nLCAnXFx1MTlGRCddLFxuICAgICAgICBbJ1xcdTE3QkJcXHUxN0M2JywgJ1xcdTE3QkJcXHUxN0M3JywgJywnLCAnXFx1MTlGRSddLFxuICAgICAgICBbJ1xcdTE3RDQnLCAnXFx1MTdENScsICcuJywgJ1xcdTE5RkYnXSxcbiAgICAgICAgWydcXHUxN0NBJywgJz8nLCAnLyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFsnXFx1MjAwQicsICcgJywgJ1xcdTAwQTAnLCAnICddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydrbSddXG4gIH0sXG4gICdcXHUwYzk1XFx1MGNhOFxcdTBjY2RcXHUwY2E4XFx1MGNhMSc6IHtcbiAgICAnbmFtZSc6ICdLYW5uYWRhJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwQ0NBJywgJ1xcdTBDOTInXSxcbiAgICAgICAgWycxJywgJycsICdcXHUwQ0U3J10sXG4gICAgICAgIFsnMicsICcnLCAnXFx1MENFOCddLFxuICAgICAgICBbJzMnLCAnXFx1MENDRFxcdTBDQjAnLCAnXFx1MENFOSddLFxuICAgICAgICBbJzQnLCAnXFx1MENCMFxcdTBDQ0QnLCAnXFx1MENFQSddLFxuICAgICAgICBbJzUnLCAnXFx1MEM5Q1xcdTBDQ0RcXHUwQzlFJywgJ1xcdTBDRUInXSxcbiAgICAgICAgWyc2JywgJ1xcdTBDQTRcXHUwQ0NEXFx1MENCMCcsICdcXHUwQ0VDJ10sXG4gICAgICAgIFsnNycsICdcXHUwQzk1XFx1MENDRFxcdTBDQjcnLCAnXFx1MENFRCddLFxuICAgICAgICBbJzgnLCAnXFx1MENCNlxcdTBDQ0RcXHUwQ0IwJywgJ1xcdTBDRUUnXSxcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MENFRiddLFxuICAgICAgICBbJzAnLCAnKScsICdcXHUwQ0U2J10sXG4gICAgICAgIFsnLScsICdcXHUwQzgzJ10sXG4gICAgICAgIFsnXFx1MENDMycsICdcXHUwQzhCJywgJ1xcdTBDQzQnLCAnXFx1MENFMCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwQ0NDJywgJ1xcdTBDOTQnXSxcbiAgICAgICAgWydcXHUwQ0M4JywgJ1xcdTBDOTAnLCAnXFx1MENENiddLFxuICAgICAgICBbJ1xcdTBDQkUnLCAnXFx1MEM4NiddLFxuICAgICAgICBbJ1xcdTBDQzAnLCAnXFx1MEM4OCcsICcnLCAnXFx1MENFMSddLFxuICAgICAgICBbJ1xcdTBDQzInLCAnXFx1MEM4QSddLFxuICAgICAgICBbJ1xcdTBDQUMnLCAnXFx1MENBRCddLFxuICAgICAgICBbJ1xcdTBDQjknLCAnXFx1MEM5OSddLFxuICAgICAgICBbJ1xcdTBDOTcnLCAnXFx1MEM5OCddLFxuICAgICAgICBbJ1xcdTBDQTYnLCAnXFx1MENBNyddLFxuICAgICAgICBbJ1xcdTBDOUMnLCAnXFx1MEM5RCddLFxuICAgICAgICBbJ1xcdTBDQTEnLCAnXFx1MENBMiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTBDQ0InLCAnXFx1MEM5MyddLFxuICAgICAgICBbJ1xcdTBDQzcnLCAnXFx1MEM4RicsICdcXHUwQ0Q1J10sXG4gICAgICAgIFsnXFx1MENDRCcsICdcXHUwQzg1J10sXG4gICAgICAgIFsnXFx1MENCRicsICdcXHUwQzg3JywgJycsICdcXHUwQzhDJ10sXG4gICAgICAgIFsnXFx1MENDMScsICdcXHUwQzg5J10sXG4gICAgICAgIFsnXFx1MENBQScsICdcXHUwQ0FCJywgJycsICdcXHUwQ0RFJ10sXG4gICAgICAgIFsnXFx1MENCMCcsICdcXHUwQ0IxJ10sXG4gICAgICAgIFsnXFx1MEM5NScsICdcXHUwQzk2J10sXG4gICAgICAgIFsnXFx1MENBNCcsICdcXHUwQ0E1J10sXG4gICAgICAgIFsnXFx1MEM5QScsICdcXHUwQzlCJ10sXG4gICAgICAgIFsnXFx1MEM5RicsICdcXHUwQ0EwJ10sXG4gICAgICAgIFsnJywgJ1xcdTBDOUUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTBDQzYnLCAnXFx1MEM4RiddLFxuICAgICAgICBbJ1xcdTBDODInXSxcbiAgICAgICAgWydcXHUwQ0FFJywgJ1xcdTBDQTMnXSxcbiAgICAgICAgWydcXHUwQ0E4J10sXG4gICAgICAgIFsnXFx1MENCNSddLFxuICAgICAgICBbJ1xcdTBDQjInLCAnXFx1MENCMyddLFxuICAgICAgICBbJ1xcdTBDQjgnLCAnXFx1MENCNiddLFxuICAgICAgICBbJywnLCAnXFx1MENCNyddLFxuICAgICAgICBbJy4nLCAnfCddLFxuICAgICAgICBbJ1xcdTBDQUYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2tuJ11cbiAgfSxcbiAgJ1xcdWQ1NWNcXHVhZDZkXFx1YzViNCc6IHtcbiAgICAnbmFtZSc6ICdLb3JlYW4nLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ2AnLCAnficsICdgJywgJ34nXSxcbiAgICAgICAgWycxJywgJyEnLCAnMScsICchJ10sXG4gICAgICAgIFsnMicsICdAJywgJzInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIycsICczJywgJyMnXSxcbiAgICAgICAgWyc0JywgJyQnLCAnNCcsICckJ10sXG4gICAgICAgIFsnNScsICclJywgJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnXicsICc2JywgJ14nXSxcbiAgICAgICAgWyc3JywgJyYnLCAnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJywgJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKScsICc5JywgJyknXSxcbiAgICAgICAgWycwJywgJygnLCAnMCcsICcoJ10sXG4gICAgICAgIFsnLScsICdfJywgJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKycsICc9JywgJysnXSxcbiAgICAgICAgWydcXHUyMEE5JywgJ3wnLCAnXFx1MjBBOScsICd8J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTExMDcnLCAnXFx1MTEwOCcsICdxJywgJ1EnXSxcbiAgICAgICAgWydcXHUxMTBDJywgJ1xcdTExMEQnLCAndycsICdXJ10sXG4gICAgICAgIFsnXFx1MTEwMycsICdcXHUxMTA0JywgJ2UnLCAnRSddLFxuICAgICAgICBbJ1xcdTExMDAnLCAnXFx1MTEwMScsICdyJywgJ1InXSxcbiAgICAgICAgWydcXHUxMTA5JywgJ1xcdTExMEEnLCAndCcsICdUJ10sXG4gICAgICAgIFsnXFx1MTE2RCcsICcnLCAneScsICdZJ10sXG4gICAgICAgIFsnXFx1MTE2NycsICcnLCAndScsICdVJ10sXG4gICAgICAgIFsnXFx1MTE2MycsICcnLCAnaScsICdJJ10sXG4gICAgICAgIFsnXFx1MTE2MicsICdcXHUxMTY0JywgJ28nLCAnTyddLFxuICAgICAgICBbJ1xcdTExNjYnLCAnXFx1MTE2OCcsICdwJywgJ1AnXSxcbiAgICAgICAgWydbJywgJ3snLCAnWycsICd7J10sXG4gICAgICAgIFsnXScsICd9JywgJ10nLCAnfSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUxMTA2JywgJycsICdhJywgJ0EnXSxcbiAgICAgICAgWydcXHUxMTAyJywgJycsICdzJywgJ1MnXSxcbiAgICAgICAgWydcXHUxMTBCJywgJycsICdkJywgJ0QnXSxcbiAgICAgICAgWydcXHUxMTA1JywgJycsICdmJywgJ0YnXSxcbiAgICAgICAgWydcXHUxMTEyJywgJycsICdnJywgJ0cnXSxcbiAgICAgICAgWydcXHUxMTY5JywgJycsICdoJywgJ0gnXSxcbiAgICAgICAgWydcXHUxMTY1JywgJycsICdqJywgJ0onXSxcbiAgICAgICAgWydcXHUxMTYxJywgJycsICdrJywgJ0snXSxcbiAgICAgICAgWydcXHUxMTc1JywgJycsICdsJywgJ0wnXSxcbiAgICAgICAgWyc7JywgJzonLCAnOycsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ1wiJywgJ1xcJycsICdcIiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUxMTBGJywgJycsICd6JywgJ1onXSxcbiAgICAgICAgWydcXHUxMTEwJywgJycsICd4JywgJ1gnXSxcbiAgICAgICAgWydcXHUxMTBFJywgJycsICdjJywgJ0MnXSxcbiAgICAgICAgWydcXHUxMTExJywgJycsICd2JywgJ1YnXSxcbiAgICAgICAgWydcXHUxMTcyJywgJycsICdiJywgJ0InXSxcbiAgICAgICAgWydcXHUxMTZFJywgJycsICduJywgJ04nXSxcbiAgICAgICAgWydcXHUxMTczJywgJycsICdtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzwnLCAnLCcsICc8J10sXG4gICAgICAgIFsnLicsICc+JywgJy4nLCAnPiddLFxuICAgICAgICBbJy8nLCAnPycsICcvJywgJz8nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFsnS29yJywgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsna28nXVxuICB9LFxuICAnS3VyZFxcdTAwZWUnOiB7XG4gICAgJ25hbWUnOiAnS3VyZGlzaCcsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MjBhYycsICd+J10sXG4gICAgICAgIFsnXFx1MDY2MScsICchJ10sXG4gICAgICAgIFsnXFx1MDY2MicsICdAJ10sXG4gICAgICAgIFsnXFx1MDY2MycsICcjJ10sXG4gICAgICAgIFsnXFx1MDY2NCcsICckJ10sXG4gICAgICAgIFsnXFx1MDY2NScsICclJ10sXG4gICAgICAgIFsnXFx1MDY2NicsICdeJ10sXG4gICAgICAgIFsnXFx1MDY2NycsICcmJ10sXG4gICAgICAgIFsnXFx1MDY2OCcsICcqJ10sXG4gICAgICAgIFsnXFx1MDY2OScsICcoJ10sXG4gICAgICAgIFsnXFx1MDY2MCcsICcpJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA2NDInLCAnYCddLFxuICAgICAgICBbJ1xcdTA2NDgnLCAnXFx1MDY0OFxcdTA2NDgnXSxcbiAgICAgICAgWydcXHUwNmQ1JywgJ1xcdTA2NGEnXSxcbiAgICAgICAgWydcXHUwNjMxJywgJ1xcdTA2OTUnXSxcbiAgICAgICAgWydcXHUwNjJhJywgJ1xcdTA2MzcnXSxcbiAgICAgICAgWydcXHUwNmNjJywgJ1xcdTA2Y2UnXSxcbiAgICAgICAgWydcXHUwNjI2JywgJ1xcdTA2MjEnXSxcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2MzknXSxcbiAgICAgICAgWydcXHUwNmM2JywgJ1xcdTA2MjQnXSxcbiAgICAgICAgWydcXHUwNjdlJywgJ1xcdTA2MmInXSxcbiAgICAgICAgWydbJywgJ3snXSxcbiAgICAgICAgWyddJywgJ30nXSxcbiAgICAgICAgWydcXFxcJywgJ3wnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIyJ10sXG4gICAgICAgIFsnXFx1MDYzMycsICdcXHUwNjM0J10sXG4gICAgICAgIFsnXFx1MDYyZicsICdcXHUwNjMwJ10sXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjI1J10sXG4gICAgICAgIFsnXFx1MDZhZicsICdcXHUwNjNhJ10sXG4gICAgICAgIFsnXFx1MDY0NycsICdcXHUyMDBjJ10sXG4gICAgICAgIFsnXFx1MDY5OCcsICdcXHUwNjIzJ10sXG4gICAgICAgIFsnXFx1MDZhOScsICdcXHUwNjQzJ10sXG4gICAgICAgIFsnXFx1MDY0NCcsICdcXHUwNmI1J10sXG4gICAgICAgIFsnXFx1MDYxYicsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTA2MzInLCAnXFx1MDYzNiddLFxuICAgICAgICBbJ1xcdTA2MmUnLCAnXFx1MDYzNSddLFxuICAgICAgICBbJ1xcdTA2MmMnLCAnXFx1MDY4NiddLFxuICAgICAgICBbJ1xcdTA2YTQnLCAnXFx1MDYzOCddLFxuICAgICAgICBbJ1xcdTA2MjgnLCAnXFx1MDY0OSddLFxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDYyOSddLFxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFx1MDY0MCddLFxuICAgICAgICBbJ1xcdTA2MGMnLCAnPCddLFxuICAgICAgICBbJy4nLCAnPiddLFxuICAgICAgICBbJy8nLCAnXFx1MDYxZiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2t1J11cbiAgfSxcbiAgJ1xcdTA0MWFcXHUwNDRiXFx1MDQ0MFxcdTA0MzNcXHUwNDRiXFx1MDQzN1xcdTA0NDdcXHUwNDMwJzoge1xuICAgICduYW1lJzogJ0t5cmd5eicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDQ1MScsICdcXHUwNDAxJ10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdcIiddLFxuICAgICAgICBbJzMnLCAnXFx1MjExNiddLFxuICAgICAgICBbJzQnLCAnOyddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnOiddLFxuICAgICAgICBbJzcnLCAnPyddLFxuICAgICAgICBbJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCddLFxuICAgICAgICBbJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnLCAnXFx1MDRBRicsICdcXHUwNEFFJ10sXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJywgJ1xcdTA0QTMnLCAnXFx1MDRBMiddLFxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxuICAgICAgICBbJ1xcXFwnLCAnLyddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnLCAnXFx1MDRFOScsICdcXHUwNEU4J10sXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J10sXG4gICAgICAgIFsnXFx1MDQ0RCcsICdcXHUwNDJEJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTA0NEYnLCAnXFx1MDQyRiddLFxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxuICAgICAgICBbJ1xcdTA0M0MnLCAnXFx1MDQxQyddLFxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxuICAgICAgICBbJ1xcdTA0NEMnLCAnXFx1MDQyQyddLFxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddLFxuICAgICAgICBbJy4nLCAnLCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsna3knXVxuICB9LFxuICAnTGF0dmllXFx1MDE2MXUnOiB7XG4gICAgJ25hbWUnOiAnTGF0dmlhbicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDBBRCcsICc/J10sXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwQUInXSxcbiAgICAgICAgWycyJywgJ1xcdTAwQUInLCAnJywgJ0AnXSxcbiAgICAgICAgWyczJywgJ1xcdTAwQkInLCAnJywgJyMnXSxcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MjBBQycsICckJ10sXG4gICAgICAgIFsnNScsICclJywgJ1wiJywgJ34nXSxcbiAgICAgICAgWyc2JywgJy8nLCAnXFx1MjAxOScsICdeJ10sXG4gICAgICAgIFsnNycsICcmJywgJycsICdcXHUwMEIxJ10sXG4gICAgICAgIFsnOCcsICdcXHUwMEQ3JywgJzonXSxcbiAgICAgICAgWyc5JywgJygnXSxcbiAgICAgICAgWycwJywgJyknXSxcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MjAxMycsICdcXHUyMDE0J10sXG4gICAgICAgIFsnZicsICdGJywgJz0nLCAnOyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwMTZCJywgJ1xcdTAxNkEnLCAncScsICdRJ10sXG4gICAgICAgIFsnZycsICdHJywgJ1xcdTAxMjMnLCAnXFx1MDEyMiddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ3InLCAnUicsICdcXHUwMTU3JywgJ1xcdTAxNTYnXSxcbiAgICAgICAgWydtJywgJ00nLCAndycsICdXJ10sXG4gICAgICAgIFsndicsICdWJywgJ3knLCAnWSddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ1xcdTAxMTMnLCAnXFx1MDExMiddLFxuICAgICAgICBbJ1xcdTAxMEQnLCAnXFx1MDEwQyddLFxuICAgICAgICBbJ1xcdTAxN0UnLCAnXFx1MDE3RCcsICdbJywgJ3snXSxcbiAgICAgICAgWydoJywgJ0gnLCAnXScsICd9J10sXG4gICAgICAgIFsnXFx1MDEzNycsICdcXHUwMTM2J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTAxNjEnLCAnXFx1MDE2MCddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsnXFx1MDBCNCcsICdcXHUwMEIwJywgJ1xcdTAwQjQnLCAnXFx1MDBBOCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwMTQ2JywgJ1xcdTAxNDUnXSxcbiAgICAgICAgWydiJywgJ0InLCAneCcsICdYJ10sXG4gICAgICAgIFsnXFx1MDEyQicsICdcXHUwMTJBJ10sXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxMzcnLCAnXFx1MDEzNiddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMEY1JywgJ1xcdTAwRDUnXSxcbiAgICAgICAgWydcXHUwMTAxJywgJ1xcdTAxMDAnXSxcbiAgICAgICAgWycsJywgJzsnLCAnPCddLFxuICAgICAgICBbJy4nLCAnOicsICc+J10sXG4gICAgICAgIFsnXFx1MDEzQycsICdcXHUwMTNCJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydsdiddXG4gIH0sXG4gICdMaWV0dXZpXFx1MDE3Myc6IHtcbiAgICAnbmFtZSc6ICdMaXRodWFuaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydgJywgJ34nXSxcbiAgICAgICAgWydcXHUwMTA1JywgJ1xcdTAxMDQnXSxcbiAgICAgICAgWydcXHUwMTBEJywgJ1xcdTAxMEMnXSxcbiAgICAgICAgWydcXHUwMTE5JywgJ1xcdTAxMTgnXSxcbiAgICAgICAgWydcXHUwMTE3JywgJ1xcdTAxMTYnXSxcbiAgICAgICAgWydcXHUwMTJGJywgJ1xcdTAxMkUnXSxcbiAgICAgICAgWydcXHUwMTYxJywgJ1xcdTAxNjAnXSxcbiAgICAgICAgWydcXHUwMTczJywgJ1xcdTAxNzInXSxcbiAgICAgICAgWydcXHUwMTZCJywgJ1xcdTAxNkEnXSxcbiAgICAgICAgWydcXHUyMDFFJywgJygnXSxcbiAgICAgICAgWydcXHUyMDFDJywgJyknXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgWydcXHUwMTdFJywgJ1xcdTAxN0QnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnWycsICd7J10sXG4gICAgICAgIFsnXScsICd9J10sXG4gICAgICAgIFsnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJzsnLCAnOiddLFxuICAgICAgICBbJ1xcJycsICdcIiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUyMDEzJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWyd6JywgJ1onXSxcbiAgICAgICAgWyd4JywgJ1gnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzwnXSxcbiAgICAgICAgWycuJywgJz4nXSxcbiAgICAgICAgWycvJywgJz8nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydsdCddXG4gIH0sXG4gICdNYWd5YXInOiB7XG4gICAgJ25hbWUnOiAnSHVuZ2FyaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWycwJywgJ1xcdTAwYTcnXSxcbiAgICAgICAgWycxJywgJ1xcJycsICd+J10sXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMmM3J10sXG4gICAgICAgIFsnMycsICcrJywgJ1xcdTAyYzYnXSxcbiAgICAgICAgWyc0JywgJyEnLCAnXFx1MDJkOCddLFxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMGIwJ10sXG4gICAgICAgIFsnNicsICcvJywgJ1xcdTAyZGInXSxcbiAgICAgICAgWyc3JywgJz0nLCAnYCddLFxuICAgICAgICBbJzgnLCAnKCcsICdcXHUwMmQ5J10sXG4gICAgICAgIFsnOScsICcpJywgJ1xcdTAwYjQnXSxcbiAgICAgICAgWydcXHUwMGY2JywgJ1xcdTAwZDYnLCAnXFx1MDJkZCddLFxuICAgICAgICBbJ1xcdTAwZmMnLCAnXFx1MDBkYycsICdcXHUwMGE4J10sXG4gICAgICAgIFsnXFx1MDBmMycsICdcXHUwMGQzJywgJ1xcdTAwYjgnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJ1xcXFwnXSxcbiAgICAgICAgWyd3JywgJ1cnLCAnfCddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMGM0J10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsndScsICdVJywgJ1xcdTIwYWMnXSxcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBjZCddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1xcdTAxNTEnLCAnXFx1MDE1MCcsICdcXHUwMGY3J10sXG4gICAgICAgIFsnXFx1MDBmYScsICdcXHUwMGRhJywgJ1xcdTAwZDcnXSxcbiAgICAgICAgWydcXHUwMTcxJywgJ1xcdTAxNzAnLCAnXFx1MDBhNCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBlNCddLFxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTExJ10sXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTAnXSxcbiAgICAgICAgWydmJywgJ0YnLCAnWyddLFxuICAgICAgICBbJ2cnLCAnRycsICddJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJywgJ1xcdTAwZWQnXSxcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDE0MSddLFxuICAgICAgICBbJ2wnLCAnTCcsICdcXHUwMTQyJ10sXG4gICAgICAgIFsnXFx1MDBlOScsICdcXHUwMGM5JywgJyQnXSxcbiAgICAgICAgWydcXHUwMGUxJywgJ1xcdTAwYzEnLCAnXFx1MDBkZiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwMGVkJywgJ1xcdTAwY2QnLCAnPCddLFxuICAgICAgICBbJ3knLCAnWScsICc+J10sXG4gICAgICAgIFsneCcsICdYJywgJyMnXSxcbiAgICAgICAgWydjJywgJ0MnLCAnJiddLFxuICAgICAgICBbJ3YnLCAnVicsICdAJ10sXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcbiAgICAgICAgWyduJywgJ04nLCAnfSddLFxuICAgICAgICBbJ20nLCAnTScsICc8J10sXG4gICAgICAgIFsnLCcsICc/JywgJzsnXSxcbiAgICAgICAgWycuJywgJzonLCAnPiddLFxuICAgICAgICBbJy0nLCAnXycsICcqJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydodSddXG4gIH0sXG4gICdNYWx0aSc6IHtcbiAgICAnbmFtZSc6ICdNYWx0ZXNlIDQ4JyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwMTBCJywgJ1xcdTAxMEEnLCAnYCddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInXSxcbiAgICAgICAgWyczJywgJ1xcdTIwYWMnLCAnXFx1MDBBMyddLFxuICAgICAgICBbJzQnLCAnJCddLFxuICAgICAgICBbJzUnLCAnJSddLFxuICAgICAgICBbJzYnLCAnXiddLFxuICAgICAgICBbJzcnLCAnJiddLFxuICAgICAgICBbJzgnLCAnKiddLFxuICAgICAgICBbJzknLCAnKCddLFxuICAgICAgICBbJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MDBFOCcsICdcXHUwMEM4J10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsndScsICdVJywgJ1xcdTAwRjknLCAnXFx1MDBEOSddLFxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMEVDJywgJ1xcdTAwY2MnXSxcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBGMicsICdcXHUwMEQyJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDEyMScsICdcXHUwMTIwJywgJ1snLCAneyddLFxuICAgICAgICBbJ1xcdTAxMjcnLCAnXFx1MDEyNicsICddJywgJ30nXSxcbiAgICAgICAgWycjJywgJ1xcdTAxN2UnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJywgJ1xcdTAwRTAnLCAnXFx1MDBDMCddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJzsnLCAnOiddLFxuICAgICAgICBbJ1xcJycsICdAJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTAxN2MnLCAnXFx1MDE3YicsICdcXFxcJywgJ3wnXSxcbiAgICAgICAgWyd6JywgJ1onXSxcbiAgICAgICAgWyd4JywgJ1gnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzwnXSxcbiAgICAgICAgWycuJywgJz4nXSxcbiAgICAgICAgWycvJywgJz8nLCAnJywgJ2AnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ210J11cbiAgfSxcbiAgJ1xcdTA0MWNcXHUwNDMwXFx1MDQzYVxcdTA0MzVcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzgnOiB7XG4gICAgJ25hbWUnOiAnTWFjZWRvbmlhbiBDeXJpbGxpYycsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICd+J10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdcXHUyMDFFJ10sXG4gICAgICAgIFsnMycsICdcXHUyMDFDJ10sXG4gICAgICAgIFsnNCcsICdcXHUyMDE5J10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICdcXHUyMDE4J10sXG4gICAgICAgIFsnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcoJ10sXG4gICAgICAgIFsnMCcsICcpJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA0NTknLCAnXFx1MDQwOSddLFxuICAgICAgICBbJ1xcdTA0NUEnLCAnXFx1MDQwQSddLFxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNScsICdcXHUyMEFDJ10sXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXG4gICAgICAgIFsnXFx1MDQ1NScsICdcXHUwNDA1J10sXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4JywgJ1xcdTA0MDInXSxcbiAgICAgICAgWydcXHUwNDUzJywgJ1xcdTA0MDMnLCAnXFx1MDQ1MiddLFxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnLCAnWyddLFxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMycsICddJ10sXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXG4gICAgICAgIFsnXFx1MDQ1OCcsICdcXHUwNDA4J10sXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3JywgJ1xcdTA0MEInXSxcbiAgICAgICAgWydcXHUwNDVDJywgJ1xcdTA0MEMnLCAnXFx1MDQ1QiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwNDUxJywgJ1xcdTA0MDEnXSxcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcbiAgICAgICAgWydcXHUwNDVGJywgJ1xcdTA0MEYnXSxcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInLCAnQCddLFxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMScsICd7J10sXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJywgJ30nXSxcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnLCAnXFx1MDBBNyddLFxuICAgICAgICBbJywnLCAnOyddLFxuICAgICAgICBbJy4nLCAnOiddLFxuICAgICAgICBbJy8nLCAnPyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnbWsnXVxuICB9LFxuICAnXFx1MGQyZVxcdTBkMzJcXHUwZDJmXFx1MGQzZVxcdTBkMzNcXHUwZDAyJzoge1xuICAgICduYW1lJzogJ01hbGF5YWxhbScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MEQ0QScsICdcXHUwRDEyJ10sXG4gICAgICAgIFsnMScsICcnLCAnXFx1MEQ2NyddLFxuICAgICAgICBbJzInLCAnJywgJ1xcdTBENjgnXSxcbiAgICAgICAgWyczJywgJ1xcdTBENERcXHUwRDMwJywgJ1xcdTBENjknXSxcbiAgICAgICAgWyc0JywgJycsICdcXHUwRDZBJ10sXG4gICAgICAgIFsnNScsICcnLCAnXFx1MEQ2QiddLFxuICAgICAgICBbJzYnLCAnJywgJ1xcdTBENkMnXSxcbiAgICAgICAgWyc3JywgJ1xcdTBEMTVcXHUwRDREXFx1MEQzNycsICdcXHUwRDZEJ10sXG4gICAgICAgIFsnOCcsICcnLCAnXFx1MEQ2RSddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUwRDZGJ10sXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTBENjYnXSxcbiAgICAgICAgWyctJywgJ1xcdTBEMDMnXSxcbiAgICAgICAgWydcXHUwRDQzJywgJ1xcdTBEMEInLCAnJywgJ1xcdTBENjAnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MEQ0QycsICdcXHUwRDE0JywgJ1xcdTBENTcnXSxcbiAgICAgICAgWydcXHUwRDQ4JywgJ1xcdTBEMTAnXSxcbiAgICAgICAgWydcXHUwRDNFJywgJ1xcdTBEMDYnXSxcbiAgICAgICAgWydcXHUwRDQwJywgJ1xcdTBEMDgnLCAnJywgJ1xcdTBENjEnXSxcbiAgICAgICAgWydcXHUwRDQyJywgJ1xcdTBEMEEnXSxcbiAgICAgICAgWydcXHUwRDJDJywgJ1xcdTBEMkQnXSxcbiAgICAgICAgWydcXHUwRDM5JywgJ1xcdTBEMTknXSxcbiAgICAgICAgWydcXHUwRDE3JywgJ1xcdTBEMTgnXSxcbiAgICAgICAgWydcXHUwRDI2JywgJ1xcdTBEMjcnXSxcbiAgICAgICAgWydcXHUwRDFDJywgJ1xcdTBEMUQnXSxcbiAgICAgICAgWydcXHUwRDIxJywgJ1xcdTBEMjInXSxcbiAgICAgICAgWycnLCAnXFx1MEQxRSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwRDRCJywgJ1xcdTBEMTMnXSxcbiAgICAgICAgWydcXHUwRDQ3JywgJ1xcdTBEMEYnXSxcbiAgICAgICAgWydcXHUwRDREJywgJ1xcdTBEMDUnLCAnJywgJ1xcdTBEMEMnXSxcbiAgICAgICAgWydcXHUwRDNGJywgJ1xcdTBEMDcnXSxcbiAgICAgICAgWydcXHUwRDQxJywgJ1xcdTBEMDknXSxcbiAgICAgICAgWydcXHUwRDJBJywgJ1xcdTBEMkInXSxcbiAgICAgICAgWydcXHUwRDMwJywgJ1xcdTBEMzEnXSxcbiAgICAgICAgWydcXHUwRDE1JywgJ1xcdTBEMTYnXSxcbiAgICAgICAgWydcXHUwRDI0JywgJ1xcdTBEMjUnXSxcbiAgICAgICAgWydcXHUwRDFBJywgJ1xcdTBEMUInXSxcbiAgICAgICAgWydcXHUwRDFGJywgJ1xcdTBEMjAnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MEQ0NicsICdcXHUwRDBGJ10sXG4gICAgICAgIFsnXFx1MEQwMiddLFxuICAgICAgICBbJ1xcdTBEMkUnLCAnXFx1MEQyMyddLFxuICAgICAgICBbJ1xcdTBEMjgnXSxcbiAgICAgICAgWydcXHUwRDM1JywgJ1xcdTBEMzQnXSxcbiAgICAgICAgWydcXHUwRDMyJywgJ1xcdTBEMzMnXSxcbiAgICAgICAgWydcXHUwRDM4JywgJ1xcdTBEMzYnXSxcbiAgICAgICAgWycsJywgJ1xcdTBEMzcnXSxcbiAgICAgICAgWycuJ10sXG4gICAgICAgIFsnXFx1MEQyRiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnbWwnXVxuICB9LFxuICAnTWlzYy4gU3ltYm9scyc6IHtcbiAgICAnbmFtZSc6ICdNaXNjLiBTeW1ib2xzJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUyNjA1JywgJ1xcdTI2MDYnLCAnXFx1MjYwZScsICdcXHUyNjBmJ10sXG4gICAgICAgIFsnXFx1MjY0OCcsICdcXHUyNjczJywgJ1xcdTI2NTknLCAnXFx1MjYzMCddLFxuICAgICAgICBbJ1xcdTI2NDknLCAnXFx1MjY3NCcsICdcXHUyNjU4JywgJ1xcdTI2MzEnXSxcbiAgICAgICAgWydcXHUyNjRhJywgJ1xcdTI2NzUnLCAnXFx1MjY1NycsICdcXHUyNjMyJ10sXG4gICAgICAgIFsnXFx1MjY0YicsICdcXHUyNjc2JywgJ1xcdTI2NTYnLCAnXFx1MjYzMyddLFxuICAgICAgICBbJ1xcdTI2NGMnLCAnXFx1MjY3NycsICdcXHUyNjU1JywgJ1xcdTI2MzQnXSxcbiAgICAgICAgWydcXHUyNjRkJywgJ1xcdTI2NzgnLCAnXFx1MjY1NCcsICdcXHUyNjM1J10sXG4gICAgICAgIFsnXFx1MjY0ZScsICdcXHUyNjc5JywgJ1xcdTI2NWYnLCAnXFx1MjYzNiddLFxuICAgICAgICBbJ1xcdTI2NGYnLCAnXFx1MjY3YScsICdcXHUyNjVlJywgJ1xcdTI2MzcnXSxcbiAgICAgICAgWydcXHUyNjUwJywgJ1xcdTI2N2InLCAnXFx1MjY1ZCcsICdcXHUyNjg2J10sXG4gICAgICAgIFsnXFx1MjY1MScsICdcXHUyNjdjJywgJ1xcdTI2NWMnLCAnXFx1MjY4NyddLFxuICAgICAgICBbJ1xcdTI2NTInLCAnXFx1MjY3ZCcsICdcXHUyNjViJywgJ1xcdTI2ODgnXSxcbiAgICAgICAgWydcXHUyNjUzJywgJ1xcdTI2NzInLCAnXFx1MjY1YScsICdcXHUyNjg5J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbJ1xcdTI2M2YnLCAnXFx1MjY4MCcsICdcXHUyNjhhJywgJ1xcdTI2YTInXSxcbiAgICAgICAgWydcXHUyNjQwJywgJ1xcdTI2ODEnLCAnXFx1MjY4YicsICdcXHUyNmEzJ10sXG4gICAgICAgIFsnXFx1MjY0MScsICdcXHUyNjgyJywgJ1xcdTI2OGMnLCAnXFx1MjZhNCddLFxuICAgICAgICBbJ1xcdTI2NDInLCAnXFx1MjY4MycsICdcXHUyNjhkJywgJ1xcdTI2YTUnXSxcbiAgICAgICAgWydcXHUyNjQzJywgJ1xcdTI2ODQnLCAnXFx1MjY4ZScsICdcXHUyNmE2J10sXG4gICAgICAgIFsnXFx1MjY0NCcsICdcXHUyNjg1JywgJ1xcdTI2OGYnLCAnXFx1MjZhNyddLFxuICAgICAgICBbJ1xcdTI2NDUnLCAnXFx1MjYyMCcsICdcXHUyNmZmJywgJ1xcdTI2YTgnXSxcbiAgICAgICAgWydcXHUyNjQ2JywgJ1xcdTI2MjInLCAnXFx1MjY5MicsICdcXHUyNmE5J10sXG4gICAgICAgIFsnXFx1MjY0NycsICdcXHUyNjIzJywgJ1xcdTI2OTMnLCAnXFx1MjZiMiddLFxuICAgICAgICBbJ1xcdTI2NjknLCAnXFx1MjY2ZCcsICdcXHUyNjk0JywgJ1xcdTI2YWMnXSxcbiAgICAgICAgWydcXHUyNjZhJywgJ1xcdTI2NmUnLCAnXFx1MjY5NScsICdcXHUyNmFkJ10sXG4gICAgICAgIFsnXFx1MjY2YicsICdcXHUyNjZmJywgJ1xcdTI2OTYnLCAnXFx1MjZhZSddLFxuICAgICAgICBbJ1xcdTI2NmMnLCAnXFx1MjYwNycsICdcXHUyNjk3JywgJ1xcdTI2YWYnXSxcbiAgICAgICAgWydcXHUyNmY5JywgJ1xcdTI2MDgnLCAnXFx1MjY5OCcsICdcXHUyNmIwJ10sXG4gICAgICAgIFsnXFx1MjY3ZicsICdcXHUyNjJlJywgJ1xcdTI2MzgnLCAnXFx1MjYwOSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTI2MWUnLCAnXFx1MjYxYycsICdcXHUyNjFkJywgJ1xcdTI2MWYnXSxcbiAgICAgICAgWydcXHUyNjFiJywgJ1xcdTI2MWEnLCAnXFx1MjYxOCcsICdcXHUyNjE5J10sXG4gICAgICAgIFsnXFx1MjYwMicsICdcXHUyNjE0JywgJ1xcdTI2ZjEnLCAnXFx1MjZkOSddLFxuICAgICAgICBbJ1xcdTI2MTUnLCAnXFx1MjY2OCcsICdcXHUyNmZlJywgJ1xcdTI2ZDgnXSxcbiAgICAgICAgWydcXHUyNjNhJywgJ1xcdTI2MzknLCAnXFx1MjYzYicsICdcXHUyNmRjJ10sXG4gICAgICAgIFsnXFx1MjYxNycsICdcXHUyNjE2JywgJ1xcdTI2Y2EnLCAnXFx1MjZjOSddLFxuICAgICAgICBbJ1xcdTI2NjAnLCAnXFx1MjY2MycsICdcXHUyNjY1JywgJ1xcdTI2NjYnXSxcbiAgICAgICAgWydcXHUyNjY0JywgJ1xcdTI2NjcnLCAnXFx1MjY2MScsICdcXHUyNjYyJ10sXG4gICAgICAgIFsnXFx1MjZjMicsICdcXHUyNmMwJywgJ1xcdTI2YzMnLCAnXFx1MjZjMSddLFxuICAgICAgICBbJ1xcdTI2MjQnLCAnXFx1MjYyNScsICdcXHUyNjlhJywgJ1xcdTI2YjEnXSxcbiAgICAgICAgWydcXHUyNjEwJywgJ1xcdTI2MTEnLCAnXFx1MjYxMicsICdcXHUyNjEzJ10sXG4gICAgICAgIFsnXFx1MjYyOCcsICdcXHUyNjI2JywgJ1xcdTI2MjcnLCAnXFx1MjYyOSddLFxuICAgICAgICBbJ1xcdTI2MmEnLCAnXFx1MjYyYicsICdcXHUyNjJjJywgJ1xcdTI2MmQnXSxcbiAgICAgICAgWydcXHUyNmZhJywgJ1xcdTI2ZmInLCAnXFx1MjZmYycsICdcXHUyNmZkJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTI2MmYnLCAnXFx1MjY3MCcsICdcXHUyNjcxJywgJ1xcdTI2N2UnXSxcbiAgICAgICAgWydcXHUyNjNjJywgJ1xcdTI2OTknLCAnXFx1MjYzZCcsICdcXHUyNjNlJ10sXG4gICAgICAgIFsnXFx1MjZjNCcsICdcXHUyNjAzJywgJ1xcdTI2YzcnLCAnXFx1MjZjNiddLFxuICAgICAgICBbJ1xcdTI2YTAnLCAnXFx1MjZhMScsICdcXHUyNjIxJywgJ1xcdTI2ZDQnXSxcbiAgICAgICAgWydcXHUyNmU0JywgJ1xcdTI2ZTUnLCAnXFx1MjZlNicsICdcXHUyNmU3J10sXG4gICAgICAgIFsnXFx1MjYwYScsICdcXHUyNjBiJywgJ1xcdTI2MGMnLCAnXFx1MjYwZCddLFxuICAgICAgICBbJ1xcdTI2OWMnLCAnXFx1MjY5YicsICdcXHUyNjlkJywgJ1xcdTI2MDQnXSxcbiAgICAgICAgWydcXHUyNmIzJywgJ1xcdTI2YjQnLCAnXFx1MjZiNScsICdcXHUyNmI2J10sXG4gICAgICAgIFsnXFx1MjZiNycsICdcXHUyNmJmJywgJ1xcdTI2YjgnLCAnXFx1MjZmOCddLFxuICAgICAgICBbJ1xcdTI2YjknLCAnXFx1MjZiYScsICdcXHUyNmJiJywgJ1xcdTI2YmMnXSxcbiAgICAgICAgWydcXHUyNmJkJywgJ1xcdTI2YmUnLCAnXFx1MjY5ZicsICdcXHUyNjllJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTI2MDAnLCAnXFx1MjYwMScsICdcXHUyNmM1JywgJ1xcdTI2YzgnXSxcbiAgICAgICAgWydcXHUyNjkxJywgJ1xcdTI2OTAnLCAnXFx1MjZhYicsICdcXHUyNmFhJ10sXG4gICAgICAgIFsnXFx1MjZjYicsICdcXHUyNmNjJywgJ1xcdTI2Y2QnLCAnXFx1MjZjZSddLFxuICAgICAgICBbJ1xcdTI2Y2YnLCAnXFx1MjZkMCcsICdcXHUyNmQxJywgJ1xcdTI2ZDInXSxcbiAgICAgICAgWydcXHUyNmQzJywgJ1xcdTI2ZDUnLCAnXFx1MjZkNicsICdcXHUyNmQ3J10sXG4gICAgICAgIFsnXFx1MjZkYScsICdcXHUyNmRiJywgJ1xcdTI2ZGQnLCAnXFx1MjZkZSddLFxuICAgICAgICBbJ1xcdTI2ZGYnLCAnXFx1MjZlMCcsICdcXHUyNmUxJywgJ1xcdTI2ZTInXSxcbiAgICAgICAgWydcXHUyNmUzJywgJ1xcdTI2ZTgnLCAnXFx1MjZlOScsICdcXHUyNmVhJ10sXG4gICAgICAgIFsnXFx1MjZlYicsICdcXHUyNmVjJywgJ1xcdTI2ZWQnLCAnXFx1MjZlZSddLFxuICAgICAgICBbJ1xcdTI2ZWYnLCAnXFx1MjZmMCcsICdcXHUyNmYyJywgJ1xcdTI2ZjMnXSxcbiAgICAgICAgWydcXHUyNmY0JywgJ1xcdTI2ZjUnLCAnXFx1MjZmNicsICdcXHUyNmY3J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGtdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gICdcXHUwNDFjXFx1MDQzZVxcdTA0M2RcXHUwNDMzXFx1MDQzZVxcdTA0M2InOiB7XG4gICAgJ25hbWUnOiAnTW9uZ29saWFuIEN5cmlsbGljJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWyc9JywgJysnXSxcbiAgICAgICAgWydcXHUyMTE2JywgJzEnXSxcbiAgICAgICAgWyctJywgJzInXSxcbiAgICAgICAgWydcIicsICczJ10sXG4gICAgICAgIFsnXFx1MjBBRScsICc0J10sXG4gICAgICAgIFsnOicsICc1J10sXG4gICAgICAgIFsnLicsICc2J10sXG4gICAgICAgIFsnXycsICc3J10sXG4gICAgICAgIFsnLCcsICc4J10sXG4gICAgICAgIFsnJScsICc5J10sXG4gICAgICAgIFsnPycsICcwJ10sXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXG4gICAgICAgIFsnXFx1MDQ0OScsICdcXHUwNDI5J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxuICAgICAgICBbJ1xcdTA0NGQnLCAnXFx1MDQyZCddLFxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxuICAgICAgICBbJ1xcdTA0YWYnLCAnXFx1MDRBRSddLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxYSddLFxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxuICAgICAgICBbJ1xcXFwnLCAnfCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcbiAgICAgICAgWydcXHUwNGU5JywgJ1xcdTA0ZTgnXSxcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcbiAgICAgICAgWydcXHUwNDNlJywgJ1xcdTA0MWUnXSxcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MWInXSxcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcbiAgICAgICAgWydcXHUwNDNmJywgJ1xcdTA0MWYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXG4gICAgICAgIFsnXFx1MDQ1MScsICdcXHUwNDAxJ10sXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXG4gICAgICAgIFsnXFx1MDQzYycsICdcXHUwNDFjJ10sXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXG4gICAgICAgIFsnXFx1MDQ0YycsICdcXHUwNDJjJ10sXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXG4gICAgICAgIFsnXFx1MDQ0ZScsICdcXHUwNDJlJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnbW4nXVxuICB9LFxuICAnXFx1MDkyZVxcdTA5MzBcXHUwOTNlXFx1MDkyMFxcdTA5NDAnOiB7XG4gICAgJ25hbWUnOiAnTWFyYXRoaScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnJywgJycsICdgJywgJ34nXSxcbiAgICAgICAgWydcXHUwOTY3JywgJ1xcdTA5MEQnLCAnMScsICchJ10sXG4gICAgICAgIFsnXFx1MDk2OCcsICdcXHUwOTQ1JywgJzInLCAnQCddLFxuICAgICAgICBbJ1xcdTA5NjknLCAnXFx1MDk0RFxcdTA5MzAnLCAnMycsICcjJ10sXG4gICAgICAgIFsnXFx1MDk2QScsICdcXHUwOTMwXFx1MDk0RCcsICc0JywgJyQnXSxcbiAgICAgICAgWydcXHUwOTZCJywgJ1xcdTA5MUNcXHUwOTREXFx1MDkxRScsICc1JywgJyUnXSxcbiAgICAgICAgWydcXHUwOTZDJywgJ1xcdTA5MjRcXHUwOTREXFx1MDkzMCcsICc2JywgJ14nXSxcbiAgICAgICAgWydcXHUwOTZEJywgJ1xcdTA5MTVcXHUwOTREXFx1MDkzNycsICc3JywgJyYnXSxcbiAgICAgICAgWydcXHUwOTZFJywgJ1xcdTA5MzZcXHUwOTREXFx1MDkzMCcsICc4JywgJyonXSxcbiAgICAgICAgWydcXHUwOTZGJywgJygnLCAnOScsICcoJ10sXG4gICAgICAgIFsnXFx1MDk2NicsICcpJywgJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXFx1MDkwMycsICctJywgJ18nXSxcbiAgICAgICAgWydcXHUwOTQzJywgJ1xcdTA5MEInLCAnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA5NEMnLCAnXFx1MDkxNCddLFxuICAgICAgICBbJ1xcdTA5NDgnLCAnXFx1MDkxMCddLFxuICAgICAgICBbJ1xcdTA5M0UnLCAnXFx1MDkwNiddLFxuICAgICAgICBbJ1xcdTA5NDAnLCAnXFx1MDkwOCddLFxuICAgICAgICBbJ1xcdTA5NDInLCAnXFx1MDkwQSddLFxuICAgICAgICBbJ1xcdTA5MkMnLCAnXFx1MDkyRCddLFxuICAgICAgICBbJ1xcdTA5MzknLCAnXFx1MDkxOSddLFxuICAgICAgICBbJ1xcdTA5MTcnLCAnXFx1MDkxOCddLFxuICAgICAgICBbJ1xcdTA5MjYnLCAnXFx1MDkyNyddLFxuICAgICAgICBbJ1xcdTA5MUMnLCAnXFx1MDkxRCddLFxuICAgICAgICBbJ1xcdTA5MjEnLCAnXFx1MDkyMicsICdbJywgJ3snXSxcbiAgICAgICAgWydcXHUwOTNDJywgJ1xcdTA5MUUnLCAnXScsICd9J10sXG4gICAgICAgIFsnXFx1MDk0OScsICdcXHUwOTExJywgJ1xcXFwnLCAnfCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwOTRCJywgJ1xcdTA5MTMnXSxcbiAgICAgICAgWydcXHUwOTQ3JywgJ1xcdTA5MEYnXSxcbiAgICAgICAgWydcXHUwOTREJywgJ1xcdTA5MDUnXSxcbiAgICAgICAgWydcXHUwOTNGJywgJ1xcdTA5MDcnXSxcbiAgICAgICAgWydcXHUwOTQxJywgJ1xcdTA5MDknXSxcbiAgICAgICAgWydcXHUwOTJBJywgJ1xcdTA5MkInXSxcbiAgICAgICAgWydcXHUwOTMwJywgJ1xcdTA5MzEnXSxcbiAgICAgICAgWydcXHUwOTE1JywgJ1xcdTA5MTYnXSxcbiAgICAgICAgWydcXHUwOTI0JywgJ1xcdTA5MjUnXSxcbiAgICAgICAgWydcXHUwOTFBJywgJ1xcdTA5MUInLCAnOycsICc6J10sXG4gICAgICAgIFsnXFx1MDkxRicsICdcXHUwOTIwJywgJ1xcJycsICdcIiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWycnXSxcbiAgICAgICAgWydcXHUwOTAyJywgJ1xcdTA5MDEnLCAnJywgJ1xcdTA5NTAnXSxcbiAgICAgICAgWydcXHUwOTJFJywgJ1xcdTA5MjMnXSxcbiAgICAgICAgWydcXHUwOTI4J10sXG4gICAgICAgIFsnXFx1MDkzNSddLFxuICAgICAgICBbJ1xcdTA5MzInLCAnXFx1MDkzMyddLFxuICAgICAgICBbJ1xcdTA5MzgnLCAnXFx1MDkzNiddLFxuICAgICAgICBbJywnLCAnXFx1MDkzNycsICcsJywgJzwnXSxcbiAgICAgICAgWycuJywgJ1xcdTA5NjQnLCAnLicsICc+J10sXG4gICAgICAgIFsnXFx1MDkyRicsICdcXHUwOTVGJywgJy8nLCAnPyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnbXInXVxuICB9LFxuICAnXFx1MTAxOVxcdTEwM2NcXHUxMDE0XFx1MTAzYVxcdTEwMTlcXHUxMDJjXFx1MTAxOFxcdTEwMmNcXHUxMDFlXFx1MTAyYyc6IHtcbiAgICAnbmFtZSc6ICdCdXJtZXNlJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUxMDM5YCcsICd+J10sXG4gICAgICAgIFsnXFx1MTA0MScsICdcXHUxMDBEJ10sXG4gICAgICAgIFsnXFx1MTA0MicsICdcXHUxMDBFJ10sXG4gICAgICAgIFsnXFx1MTA0MycsICdcXHUxMDBCJ10sXG4gICAgICAgIFsnXFx1MTA0NCcsICdcXHUxMDAwXFx1MTAzQlxcdTEwMTVcXHUxMDNBJ10sXG4gICAgICAgIFsnXFx1MTA0NScsICclJ10sXG4gICAgICAgIFsnXFx1MTA0NicsICcvJ10sXG4gICAgICAgIFsnXFx1MTA0NycsICdcXHUxMDFCJ10sXG4gICAgICAgIFsnXFx1MTA0OCcsICdcXHUxMDAyJ10sXG4gICAgICAgIFsnXFx1MTA0OScsICcoJ10sXG4gICAgICAgIFsnXFx1MTA0MCcsICcpJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTEwMDYnLCAnXFx1MTAyOSddLFxuICAgICAgICBbJ1xcdTEwMTAnLCAnXFx1MTA0MCddLFxuICAgICAgICBbJ1xcdTEwMTQnLCAnXFx1MTAzRiddLFxuICAgICAgICBbJ1xcdTEwMTknLCAnXFx1MTAyMyddLFxuICAgICAgICBbJ1xcdTEwMjEnLCAnXFx1MTAyNCddLFxuICAgICAgICBbJ1xcdTEwMTUnLCAnXFx1MTA0QyddLFxuICAgICAgICBbJ1xcdTEwMDAnLCAnXFx1MTAwOSddLFxuICAgICAgICBbJ1xcdTEwMDQnLCAnXFx1MTA0RCddLFxuICAgICAgICBbJ1xcdTEwMUUnLCAnXFx1MTAyNSddLFxuICAgICAgICBbJ1xcdTEwMDUnLCAnXFx1MTAwRiddLFxuICAgICAgICBbJ1xcdTEwMUYnLCAnXFx1MTAyNyddLFxuICAgICAgICBbJ1xcdTIwMTgnLCAnXFx1MjAxOSddLFxuICAgICAgICBbJ1xcdTEwNEYnLCAnXFx1MTAwQlxcdTEwMzlcXHUxMDBDJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDMxJywgJ1xcdTEwMTcnXSxcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzQicsICdcXHUyMDBCXFx1MTAzRSddLFxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDJEJywgJ1xcdTIwMEJcXHUxMDJFJ10sXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwM0EnLCAnXFx1MTAwNFxcdTEwM0FcXHUxMDM5XFx1MjAwQiddLFxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDJCJywgJ1xcdTIwMEJcXHUxMDNEJ10sXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMzcnLCAnXFx1MjAwQlxcdTEwMzYnXSxcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzQycsICdcXHUyMDBCXFx1MTAzMiddLFxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDJGJywgJ1xcdTIwMEJcXHUxMDJGJ10sXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMzAnLCAnXFx1MjAwQlxcdTEwMzAnXSxcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzOCcsICdcXHUyMDBCXFx1MTAyQlxcdTEwM0EnXSxcbiAgICAgICAgWydcXHUxMDEyJywgJ1xcdTEwMTMnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MTAxNicsICdcXHUxMDA3J10sXG4gICAgICAgIFsnXFx1MTAxMScsICdcXHUxMDBDJ10sXG4gICAgICAgIFsnXFx1MTAwMScsICdcXHUxMDAzJ10sXG4gICAgICAgIFsnXFx1MTAxQycsICdcXHUxMDIwJ10sXG4gICAgICAgIFsnXFx1MTAxOCcsICdcXHUxMDI2J10sXG4gICAgICAgIFsnXFx1MTAwQScsICdcXHUxMDA4J10sXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMkMnLCAnXFx1MTAyQSddLFxuICAgICAgICBbJ1xcdTEwMUEnLCAnXFx1MTAxQiddLFxuICAgICAgICBbJy4nLCAnXFx1MTAxQiddLFxuICAgICAgICBbJ1xcdTEwNEInLCAnXFx1MTA0QSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ215J11cbiAgfSxcbiAgJ05lZGVybGFuZHMnOiB7XG4gICAgJ25hbWUnOiAnRHV0Y2gnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ0AnLCAnXFx1MDBhNycsICdcXHUwMGFjJ10sXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwYjknXSxcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAwYjInXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGJjJ10sXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwYmQnXSxcbiAgICAgICAgWyc2JywgJyYnLCAnXFx1MDBiZSddLFxuICAgICAgICBbJzcnLCAnXycsICdcXHUwMGEzJ10sXG4gICAgICAgIFsnOCcsICcoJywgJ3snXSxcbiAgICAgICAgWyc5JywgJyknLCAnfSddLFxuICAgICAgICBbJzAnLCAnXFwnJ10sXG4gICAgICAgIFsnLycsICc/JywgJ1xcXFwnXSxcbiAgICAgICAgWydcXHUwMGIwJywgJ34nLCAnXFx1MDBiOCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJ3InLCAnUicsICdcXHUwMGI2J10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDBhOCcsICdeJ10sXG4gICAgICAgIFsnKicsICd8J10sXG4gICAgICAgIFsnPCcsICc+J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMGRmJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnKycsICdcXHUwMGIxJ10sXG4gICAgICAgIFsnXFx1MDBiNCcsICdgJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ10nLCAnWycsICdcXHUwMGE2J10sXG4gICAgICAgIFsneicsICdaJywgJ1xcdTAwYWInXSxcbiAgICAgICAgWyd4JywgJ1gnLCAnXFx1MDBiYiddLFxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMGEyJ10sXG4gICAgICAgIFsndicsICdWJ10sXG4gICAgICAgIFsnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwYjUnXSxcbiAgICAgICAgWycsJywgJzsnXSxcbiAgICAgICAgWycuJywgJzonLCAnXFx1MDBiNyddLFxuICAgICAgICBbJy0nLCAnPSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnbmwnXVxuICB9LFxuICAnTm9yc2snOiB7XG4gICAgJ25hbWUnOiAnTm9yd2VnaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWyd8JywgJ1xcdTAwYTcnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBhMyddLFxuICAgICAgICBbJzQnLCAnXFx1MDBhNCcsICckJ10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICcmJ10sXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcbiAgICAgICAgWyc4JywgJygnLCAnWyddLFxuICAgICAgICBbJzknLCAnKScsICddJ10sXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcbiAgICAgICAgWycrJywgJz8nXSxcbiAgICAgICAgWydcXFxcJywgJ2AnLCAnXFx1MDBiNCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1xcdTAwZTUnLCAnXFx1MDBjNSddLFxuICAgICAgICBbJ1xcdTAwYTgnLCAnXicsICd+J10sXG4gICAgICAgIFsnXFwnJywgJyonXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnXFx1MDBmOCcsICdcXHUwMGQ4J10sXG4gICAgICAgIFsnXFx1MDBlNicsICdcXHUwMGM2J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPiddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTScsICdcXHUwM2JjJywgJ1xcdTAzOWMnXSxcbiAgICAgICAgWycsJywgJzsnXSxcbiAgICAgICAgWycuJywgJzonXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ25vJywgJ25iJywgJ25uJ11cbiAgfSxcbiAgJ1xcdTA2N2VcXHUwNjlhXFx1MDYyYVxcdTA2NDgnOiB7XG4gICAgJ25hbWUnOiAnUGFzaHRvJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUyMDBkJywgJ1xcdTAwZjcnLCAnYCddLFxuICAgICAgICBbJ1xcdTA2ZjEnLCAnIScsICdgJ10sXG4gICAgICAgIFsnXFx1MDZmMicsICdcXHUwNjZjJywgJ0AnXSxcbiAgICAgICAgWydcXHUwNmYzJywgJ1xcdTA2NmInLCAnXFx1MDY2YiddLFxuICAgICAgICBbJ1xcdTA2ZjQnLCAnXFx1MDBhNCcsICdcXHUwMGEzJ10sXG4gICAgICAgIFsnXFx1MDZmNScsICdcXHUwNjZhJywgJyUnXSxcbiAgICAgICAgWydcXHUwNmY2JywgJ1xcdTAwZDcnLCAnXiddLFxuICAgICAgICBbJ1xcdTA2ZjcnLCAnXFx1MDBhYicsICcmJ10sXG4gICAgICAgIFsnXFx1MDZmOCcsICdcXHUwMGJiJywgJyonXSxcbiAgICAgICAgWydcXHUwNmY5JywgJygnLCAnXFx1ZmRmMiddLFxuICAgICAgICBbJ1xcdTA2ZjAnLCAnKScsICdcXHVmZWZiJ10sXG4gICAgICAgIFsnLScsICdcXHUwNjQwJywgJ18nXSxcbiAgICAgICAgWyc9JywgJysnLCAnXFx1ZmU4NycsICdcXHUwMGY3J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA2MzYnLCAnXFx1MDY1MicsICdcXHUwNmQ1J10sXG4gICAgICAgIFsnXFx1MDYzNScsICdcXHUwNjRjJywgJ1xcdTA2NTMnXSxcbiAgICAgICAgWydcXHUwNjJiJywgJ1xcdTA2NGQnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJ1xcdTA2NDInLCAnXFx1MDY0YicsICdcXHVmZWY3J10sXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjRmJywgJ1xcdWZlZjUnXSxcbiAgICAgICAgWydcXHUwNjNhJywgJ1xcdTA2NTAnLCAnXFwnJ10sXG4gICAgICAgIFsnXFx1MDYzOScsICdcXHUwNjRlJywgJ1xcdWZlODQnXSxcbiAgICAgICAgWydcXHUwNjQ3JywgJ1xcdTA2NTEnLCAnXFx1MDY3MCddLFxuICAgICAgICBbJ1xcdTA2MmUnLCAnXFx1MDY4MScsICdcXCcnXSxcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2ODUnLCAnXCInXSxcbiAgICAgICAgWydcXHUwNjJjJywgJ10nLCAnfSddLFxuICAgICAgICBbJ1xcdTA2ODYnLCAnWycsICd7J10sXG4gICAgICAgIFsnXFxcXCcsICdcXHUwNjZkJywgJ3wnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDYzNCcsICdcXHUwNjlhJywgJ1xcdWZiYjAnXSxcbiAgICAgICAgWydcXHUwNjMzJywgJ1xcdTA2Y2QnLCAnXFx1MDZkMiddLFxuICAgICAgICBbJ1xcdTA2Y2MnLCAnXFx1MDY0YScsICdcXHUwNmQyJ10sXG4gICAgICAgIFsnXFx1MDYyOCcsICdcXHUwNjdlJywgJ1xcdTA2YmEnXSxcbiAgICAgICAgWydcXHUwNjQ0JywgJ1xcdTA2MjMnLCAnXFx1MDZiNyddLFxuICAgICAgICBbJ1xcdTA2MjcnLCAnXFx1MDYyMicsICdcXHUwNjcxJ10sXG4gICAgICAgIFsnXFx1MDYyYScsICdcXHUwNjdjJywgJ1xcdTA2NzknXSxcbiAgICAgICAgWydcXHUwNjQ2JywgJ1xcdTA2YmMnLCAnPCddLFxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFx1MDYyOScsICc+J10sXG4gICAgICAgIFsnXFx1MDZhOScsICc6JywgJ1xcdTA2NDMnXSxcbiAgICAgICAgWydcXHUwNmFmJywgJ1xcdTA2MWInLCAnXFx1MDZhYiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwNjM4JywgJ1xcdTA2MjYnLCAnPyddLFxuICAgICAgICBbJ1xcdTA2MzcnLCAnXFx1MDZkMCcsICc7J10sXG4gICAgICAgIFsnXFx1MDYzMicsICdcXHUwNjk4JywgJ1xcdTA2NTUnXSxcbiAgICAgICAgWydcXHUwNjMxJywgJ1xcdTA2MjEnLCAnXFx1MDY1NCddLFxuICAgICAgICBbJ1xcdTA2MzAnLCAnXFx1MjAwYycsICdcXHUwNjI1J10sXG4gICAgICAgIFsnXFx1MDYyZicsICdcXHUwNjg5JywgJ1xcdTA2ODgnXSxcbiAgICAgICAgWydcXHUwNjkzJywgJ1xcdTA2MjQnLCAnXFx1MDY5MSddLFxuICAgICAgICBbJ1xcdTA2NDgnLCAnXFx1MDYwYycsICcsJ10sXG4gICAgICAgIFsnXFx1MDY5NicsICcuJywgJ1xcdTA2YzcnXSxcbiAgICAgICAgWycvJywgJ1xcdTA2MWYnLCAnXFx1MDZjOSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgJ1xcdTA2NGQnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsncHMnXVxuICB9LFxuICAnXFx1MGEyYVxcdTBhNzBcXHUwYTFjXFx1MGEzZVxcdTBhMmNcXHUwYTQwJzoge1xuICAgICduYW1lJzogJ1B1bmphYmkgKEd1cm11a2hpKScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnJ10sXG4gICAgICAgIFsnMScsICdcXHUwQTREXFx1MEEzNScsICdcXHUwQTY3JywgJ1xcdTBBNjcnXSxcbiAgICAgICAgWycyJywgJ1xcdTBBNERcXHUwQTJGJywgJ1xcdTBBNjgnLCAnXFx1MEE2OCddLFxuICAgICAgICBbJzMnLCAnXFx1MEE0RFxcdTBBMzAnLCAnXFx1MEE2OScsICdcXHUwQTY5J10sXG4gICAgICAgIFsnNCcsICdcXHUwQTcxJywgJ1xcdTBBNkEnLCAnXFx1MEE2QSddLFxuICAgICAgICBbJzUnLCAnJywgJ1xcdTBBNkInLCAnXFx1MEE2QiddLFxuICAgICAgICBbJzYnLCAnJywgJ1xcdTBBNkMnLCAnXFx1MEE2QyddLFxuICAgICAgICBbJzcnLCAnJywgJ1xcdTBBNkQnLCAnXFx1MEE2RCddLFxuICAgICAgICBbJzgnLCAnJywgJ1xcdTBBNkUnLCAnXFx1MEE2RSddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUwQTZGJywgJ1xcdTBBNkYnXSxcbiAgICAgICAgWycwJywgJyknLCAnXFx1MEE2NicsICdcXHUwQTY2J10sXG4gICAgICAgIFsnLSddLFxuICAgICAgICBbJyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwQTRDJywgJ1xcdTBBMTQnXSxcbiAgICAgICAgWydcXHUwQTQ4JywgJ1xcdTBBMTAnXSxcbiAgICAgICAgWydcXHUwQTNFJywgJ1xcdTBBMDYnXSxcbiAgICAgICAgWydcXHUwQTQwJywgJ1xcdTBBMDgnXSxcbiAgICAgICAgWydcXHUwQTQyJywgJ1xcdTBBMEEnXSxcbiAgICAgICAgWydcXHUwQTJDJywgJ1xcdTBBMkQnXSxcbiAgICAgICAgWydcXHUwQTM5JywgJ1xcdTBBMTknXSxcbiAgICAgICAgWydcXHUwQTE3JywgJ1xcdTBBMTgnLCAnXFx1MEE1QScsICdcXHUwQTVBJ10sXG4gICAgICAgIFsnXFx1MEEyNicsICdcXHUwQTI3J10sXG4gICAgICAgIFsnXFx1MEExQycsICdcXHUwQTFEJywgJ1xcdTBBNUInLCAnXFx1MEE1QiddLFxuICAgICAgICBbJ1xcdTBBMjEnLCAnXFx1MEEyMicsICdcXHUwQTVDJywgJ1xcdTBBNUMnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwQTRCJywgJ1xcdTBBMTMnXSxcbiAgICAgICAgWydcXHUwQTQ3JywgJ1xcdTBBMEYnXSxcbiAgICAgICAgWydcXHUwQTREJywgJ1xcdTBBMDUnXSxcbiAgICAgICAgWydcXHUwQTNGJywgJ1xcdTBBMDcnXSxcbiAgICAgICAgWydcXHUwQTQxJywgJ1xcdTBBMDknXSxcbiAgICAgICAgWydcXHUwQTJBJywgJ1xcdTBBMkInLCAnXFx1MEE1RScsICdcXHUwQTVFJ10sXG4gICAgICAgIFsnXFx1MEEzMCddLFxuICAgICAgICBbJ1xcdTBBMTUnLCAnXFx1MEExNicsICdcXHUwQTU5JywgJ1xcdTBBNTknXSxcbiAgICAgICAgWydcXHUwQTI0JywgJ1xcdTBBMjUnXSxcbiAgICAgICAgWydcXHUwQTFBJywgJ1xcdTBBMUInXSxcbiAgICAgICAgWydcXHUwQTFGJywgJ1xcdTBBMjAnXSxcbiAgICAgICAgWydcXHUwQTNDJywgJ1xcdTBBMUUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJyddLFxuICAgICAgICBbJ1xcdTBBMDInLCAnXFx1MEEwMiddLFxuICAgICAgICBbJ1xcdTBBMkUnLCAnXFx1MEEyMyddLFxuICAgICAgICBbJ1xcdTBBMjgnXSxcbiAgICAgICAgWydcXHUwQTM1JywgJ1xcdTBBNzInLCAnXFx1MEE3MycsICdcXHUwQTczJ10sXG4gICAgICAgIFsnXFx1MEEzMicsICdcXHUwQTMzJ10sXG4gICAgICAgIFsnXFx1MEEzOCcsICdcXHUwQTM2J10sXG4gICAgICAgIFsnLCddLFxuICAgICAgICBbJy4nLCAnfCcsICdcXHUwOTY1JywgJ1xcdTA5NjUnXSxcbiAgICAgICAgWydcXHUwQTJGJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydwYSddXG4gIH0sXG4gICdcXHU2MmZjXFx1OTdmMyAoUGlueWluKSc6IHtcbiAgICAnbmFtZSc6ICdQaW55aW4nLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ2AnLCAnficsICdcXHU0ZTkzJywgJ1xcdTMwMUMnXSxcbiAgICAgICAgWycxJywgJyEnLCAnXFx1RkY2MiddLFxuICAgICAgICBbJzInLCAnQCcsICdcXHVGRjYzJ10sXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTMwMUQnXSxcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MzAxRSddLFxuICAgICAgICBbJzUnLCAnJScsICdcXHUzMDFGJ10sXG4gICAgICAgIFsnNicsICdeJywgJ1xcdTMwMDgnXSxcbiAgICAgICAgWyc3JywgJyYnLCAnXFx1MzAwOSddLFxuICAgICAgICBbJzgnLCAnKicsICdcXHUzMDJGJ10sXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTMwMEEnXSxcbiAgICAgICAgWycwJywgJyknLCAnXFx1MzAwQiddLFxuICAgICAgICBbJy0nLCAnXycsICdcXHUzMDBFJ10sXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTMwMEYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJ1xcdTAxMDEnLCAnXFx1MDEwMCddLFxuICAgICAgICBbJ3cnLCAnVycsICdcXHUwMEUxJywgJ1xcdTAwQzEnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MDFDRScsICdcXHUwMUNEJ10sXG4gICAgICAgIFsncicsICdSJywgJ1xcdTAwRTAnLCAnXFx1MDBDMCddLFxuICAgICAgICBbJ3QnLCAnVCcsICdcXHUwMTEzJywgJ1xcdTAxMTInXSxcbiAgICAgICAgWyd5JywgJ1knLCAnXFx1MDBFOScsICdcXHUwMEM5J10sXG4gICAgICAgIFsndScsICdVJywgJ1xcdTAxMUInLCAnXFx1MDExQSddLFxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMEU4JywgJ1xcdTAwQzgnXSxcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDEyQicsICdcXHUwMTJBJ10sXG4gICAgICAgIFsncCcsICdQJywgJ1xcdTAwRUQnLCAnXFx1MDBDRCddLFxuICAgICAgICBbJ1snLCAneycsICdcXHUwMUQwJywgJ1xcdTAxQ0YnXSxcbiAgICAgICAgWyddJywgJ30nLCAnXFx1MDBFQycsICdcXHUwMENDJ10sXG4gICAgICAgIFsnXFxcXCcsICd8JywgJ1xcdTMwMjAnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJywgJ1xcdTAxNEQnLCAnXFx1MDE0QyddLFxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMEYzJywgJ1xcdTAwRDMnXSxcbiAgICAgICAgWydkJywgJ0QnLCAnXFx1MDFEMicsICdcXHUwMUQxJ10sXG4gICAgICAgIFsnZicsICdGJywgJ1xcdTAwRjInLCAnXFx1MDBEMiddLFxuICAgICAgICBbJ2cnLCAnRycsICdcXHUwMGZjJywgJ1xcdTAwZGMnXSxcbiAgICAgICAgWydoJywgJ0gnLCAnXFx1MDE2QicsICdcXHUwMTZBJ10sXG4gICAgICAgIFsnaicsICdKJywgJ1xcdTAwRkEnLCAnXFx1MDBEQSddLFxuICAgICAgICBbJ2snLCAnSycsICdcXHUwMUQ0JywgJ1xcdTAxRDMnXSxcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDBGOScsICdcXHUwMEQ5J10sXG4gICAgICAgIFsnOycsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ3onLCAnWicsICdcXHUwMUQ2JywgJ1xcdTAxRDUnXSxcbiAgICAgICAgWyd4JywgJ1gnLCAnXFx1MDFEOCcsICdcXHUwMUQ3J10sXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTAxREEnLCAnXFx1MDFEOSddLFxuICAgICAgICBbJ3YnLCAnVicsICdcXHUwMURDJywgJ1xcdTAxREInXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzwnLCAnXFx1MzAwMSddLFxuICAgICAgICBbJy4nLCAnPicsICdcXHUzMDAyJ10sXG4gICAgICAgIFsnLycsICc/J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGssIEtleWJvYXJkQ2xhc3NLZXkuQWx0TGtdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWyd6aC1MQVROJ11cbiAgfSxcbiAgJ1BvbHNraSc6IHtcbiAgICAnbmFtZSc6ICdQb2xpc2ggKDIxNCknLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAyREInLCAnXFx1MDBCNyddLFxuICAgICAgICBbJzEnLCAnIScsICd+J10sXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMkM3J10sXG4gICAgICAgIFsnMycsICcjJywgJ14nXSxcbiAgICAgICAgWyc0JywgJ1xcdTAwQTQnLCAnXFx1MDJEOCddLFxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMEIwJ10sXG4gICAgICAgIFsnNicsICcmJywgJ1xcdTAyREInXSxcbiAgICAgICAgWyc3JywgJy8nLCAnYCddLFxuICAgICAgICBbJzgnLCAnKCcsICdcXHUwMEI3J10sXG4gICAgICAgIFsnOScsICcpJywgJ1xcdTAwQjQnXSxcbiAgICAgICAgWycwJywgJz0nLCAnXFx1MDJERCddLFxuICAgICAgICBbJysnLCAnPycsICdcXHUwMEE4J10sXG4gICAgICAgIFsnXFwnJywgJyonLCAnXFx1MDBCOCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnLCAnXFxcXCddLFxuICAgICAgICBbJ3cnLCAnVycsICdcXHUwMEE2J10sXG4gICAgICAgIFsnZScsICdFJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsndScsICdVJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMTdDJywgJ1xcdTAxNDQnLCAnXFx1MDBGNyddLFxuICAgICAgICBbJ1xcdTAxNUInLCAnXFx1MDEwNycsICdcXHUwMEQ3J10sXG4gICAgICAgIFsnXFx1MDBGMycsICdcXHUwMTdBJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTExJ10sXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTAnXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snXSxcbiAgICAgICAgWydsJywgJ0wnXSxcbiAgICAgICAgWydcXHUwMTQyJywgJ1xcdTAxNDEnLCAnJCddLFxuICAgICAgICBbJ1xcdTAxMDUnLCAnXFx1MDExOScsICdcXHUwMERGJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPiddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnVicsICdAJ10sXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcbiAgICAgICAgWyduJywgJ04nLCAnfSddLFxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEE3J10sXG4gICAgICAgIFsnLCcsICc7JywgJzwnXSxcbiAgICAgICAgWycuJywgJzonLCAnPiddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXVxuICB9LFxuICAnUG9sc2tpIFByb2dyYW1pc3R5Jzoge1xuICAgICduYW1lJzogJ1BvbGlzaCBQcm9ncmFtbWVycycsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICd+J10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdAJ10sXG4gICAgICAgIFsnMycsICcjJ10sXG4gICAgICAgIFsnNCcsICckJ10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICdeJ10sXG4gICAgICAgIFsnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcoJ10sXG4gICAgICAgIFsnMCcsICcpJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ3EnLCAnUSddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMTE5JywgJ1xcdTAxMTgnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBmMycsICdcXHUwMGQzJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnWycsICd7J10sXG4gICAgICAgIFsnXScsICd9J10sXG4gICAgICAgIFsnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMTA1JywgJ1xcdTAxMDQnXSxcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDE1YicsICdcXHUwMTVhJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJywgJ1xcdTAxNDInLCAnXFx1MDE0MSddLFxuICAgICAgICBbJzsnLCAnOiddLFxuICAgICAgICBbJ1xcJycsICdcIiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDE3YycsICdcXHUwMTdiJ10sXG4gICAgICAgIFsneCcsICdYJywgJ1xcdTAxN2EnLCAnXFx1MDE3OSddLFxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMTA3JywgJ1xcdTAxMDYnXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nLCAnXFx1MDE0NCcsICdcXHUwMTQzJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnLCcsICc8J10sXG4gICAgICAgIFsnLicsICc+J10sXG4gICAgICAgIFsnLycsICc/J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsncGwnXVxuICB9LFxuICAnUG9ydHVndVxcdTAwZWFzIEJyYXNpbGVpcm8nOiB7XG4gICAgJ25hbWUnOiAnUG9ydHVndWVzZSAoQnJhemlsKScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwYjknXSxcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1MDBiMiddLFxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGIzJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYTMnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBhMiddLFxuICAgICAgICBbJzYnLCAnXFx1MDBhOCcsICdcXHUwMGFjJ10sXG4gICAgICAgIFsnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcoJ10sXG4gICAgICAgIFsnMCcsICcpJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTAwYTcnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJy8nXSxcbiAgICAgICAgWyd3JywgJ1cnLCAnPyddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDBiNCcsICdgJ10sXG4gICAgICAgIFsnWycsICd7JywgJ1xcdTAwYWEnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnXSxcbiAgICAgICAgWydzJywgJ1MnXSxcbiAgICAgICAgWydkJywgJ0QnXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snXSxcbiAgICAgICAgWydsJywgJ0wnXSxcbiAgICAgICAgWydcXHUwMGU3JywgJ1xcdTAwYzcnXSxcbiAgICAgICAgWyd+JywgJ14nXSxcbiAgICAgICAgWyddJywgJ30nLCAnXFx1MDBiYSddLFxuICAgICAgICBbJy8nLCAnPyddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFxcXCcsICd8J10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTIwYTInXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzwnXSxcbiAgICAgICAgWycuJywgJz4nXSxcbiAgICAgICAgWyc6JywgJzonXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3B0LUJSJ11cbiAgfSxcbiAgJ1BvcnR1Z3VcXHUwMGVhcyc6IHtcbiAgICAnbmFtZSc6ICdQb3J0dWd1ZXNlJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBhMyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGE3J10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICcmJ10sXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcbiAgICAgICAgWyc4JywgJygnLCAnWyddLFxuICAgICAgICBbJzknLCAnKScsICddJ10sXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcbiAgICAgICAgWydcXCcnLCAnPyddLFxuICAgICAgICBbJ1xcdTAwYWInLCAnXFx1MDBiYiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnXSxcbiAgICAgICAgWyd3JywgJ1cnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJysnLCAnKicsICdcXHUwMGE4J10sXG4gICAgICAgIFsnXFx1MDBiNCcsICdgJ10sXG4gICAgICAgIFsnficsICdeJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ1xcdTAwZTcnLCAnXFx1MDBjNyddLFxuICAgICAgICBbJ1xcdTAwYmEnLCAnXFx1MDBhYSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyc8JywgJz4nLCAnXFxcXCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJywnLCAnOyddLFxuICAgICAgICBbJy4nLCAnOiddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsncHQnXVxuICB9LFxuICAnUm9tXFx1MDBlMm5cXHUwMTAzJzoge1xuICAgICduYW1lJzogJ1JvbWFuaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUyMDFFJywgJ1xcdTIwMUQnLCAnYCcsICd+J10sXG4gICAgICAgIFsnMScsICchJywgJ34nXSxcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1MDJDNyddLFxuICAgICAgICBbJzMnLCAnIycsICdeJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAyRDgnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBCMCddLFxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMkRCJ10sXG4gICAgICAgIFsnNycsICcmJywgJ2AnXSxcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDJEOSddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUwMEI0J10sXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTAyREQnXSxcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBBOCddLFxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMEI4JywgJ1xcdTAwQjEnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnLCAnXFx1MDBBNyddLFxuICAgICAgICBbJ1xcdTAxMDMnLCAnXFx1MDEwMicsICdbJywgJ3snXSxcbiAgICAgICAgWydcXHUwMEVFJywgJ1xcdTAwQ0UnLCAnXScsICd9J10sXG4gICAgICAgIFsnXFx1MDBFMicsICdcXHUwMEMyJywgJ1xcXFwnLCAnfCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnXSxcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDBkZiddLFxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMGYwJywgJ1xcdTAwRDAnXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snXSxcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDE0MicsICdcXHUwMTQxJ10sXG4gICAgICAgIFsnXFx1MDIxOScsICdcXHUwMjE4JywgJzsnLCAnOiddLFxuICAgICAgICBbJ1xcdTAyMUInLCAnXFx1MDIxQScsICdcXCcnLCAnXCInXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFxcXCcsICd8J10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTAwQTknXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzsnLCAnPCcsICdcXHUwMEFCJ10sXG4gICAgICAgIFsnLicsICc6JywgJz4nLCAnXFx1MDBCQiddLFxuICAgICAgICBbJy8nLCAnPyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsncm8nXVxuICB9LFxuICAnXFx1MDQyMFxcdTA0NDNcXHUwNDQxXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSc6IHtcbiAgICAnbmFtZSc6ICdSdXNzaWFuJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwNDUxJywgJ1xcdTA0MDEnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJ10sXG4gICAgICAgIFsnMycsICdcXHUyMTE2J10sXG4gICAgICAgIFsnNCcsICc7J10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICc6J10sXG4gICAgICAgIFsnNycsICc/J10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcoJ10sXG4gICAgICAgIFsnMCcsICcpJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA0MzknLCAnXFx1MDQxOSddLFxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxuICAgICAgICBbJ1xcXFwnLCAnLyddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcbiAgICAgICAgWydcXHUwNDREJywgJ1xcdTA0MkQnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnLycsICd8J10sXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXG4gICAgICAgIFsnXFx1MDQ0QycsICdcXHUwNDJDJ10sXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXG4gICAgICAgIFsnXFx1MDQ0RScsICdcXHUwNDJFJ10sXG4gICAgICAgIFsnLicsICcsJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsncnUnXVxuICB9LFxuICAnU2Nod2VpemVyZGV1dHNjaCc6IHtcbiAgICAnbmFtZSc6ICdTd2lzcyBHZXJtYW4nLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAwQTcnLCAnXFx1MDBCMCddLFxuICAgICAgICBbJzEnLCAnKycsICdcXHUwMEE2J10sXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXG4gICAgICAgIFsnMycsICcqJywgJyMnXSxcbiAgICAgICAgWyc0JywgJ1xcdTAwRTcnLCAnXFx1MDBCMCddLFxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMEE3J10sXG4gICAgICAgIFsnNicsICcmJywgJ1xcdTAwQUMnXSxcbiAgICAgICAgWyc3JywgJy8nLCAnfCddLFxuICAgICAgICBbJzgnLCAnKCcsICdcXHUwMEEyJ10sXG4gICAgICAgIFsnOScsICcpJ10sXG4gICAgICAgIFsnMCcsICc9J10sXG4gICAgICAgIFsnXFwnJywgJz8nLCAnXFx1MDBCNCddLFxuICAgICAgICBbJ14nLCAnYCcsICd+J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ3EnLCAnUSddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDBGQycsICdcXHUwMEU4JywgJ1snXSxcbiAgICAgICAgWydcXHUwMEE4JywgJyEnLCAnXSddLFxuICAgICAgICBbJyQnLCAnXFx1MDBBMycsICd9J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ1xcdTAwRjYnLCAnXFx1MDBFOSddLFxuICAgICAgICBbJ1xcdTAwRTQnLCAnXFx1MDBFMCcsICd7J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPicsICdcXFxcJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsndicsICdWJ10sXG4gICAgICAgIFsnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnLCcsICc7J10sXG4gICAgICAgIFsnLicsICc6J10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydkZS1DSCddXG4gIH0sXG4gICdTaHFpcCc6IHtcbiAgICAnbmFtZSc6ICdBbGJhbmlhbicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFxcXCcsICd8J10sXG4gICAgICAgIFsnMScsICchJywgJ34nXSxcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAyQzcnXSxcbiAgICAgICAgWyczJywgJyMnLCAnXiddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMkQ4J10sXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwQjAnXSxcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDJEQiddLFxuICAgICAgICBbJzcnLCAnJicsICdgJ10sXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTAyRDknXSxcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MDBCNCddLFxuICAgICAgICBbJzAnLCAnKScsICdcXHUwMkREJ10sXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwQTgnXSxcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDBCOCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnLCAnXFxcXCddLFxuICAgICAgICBbJ3cnLCAnVycsICd8J10sXG4gICAgICAgIFsnZScsICdFJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDBFNycsICdcXHUwMEM3JywgJ1xcdTAwRjcnXSxcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MDBERiddLFxuICAgICAgICBbJ10nLCAnfScsICdcXHUwMEE0J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTExJ10sXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTAnXSxcbiAgICAgICAgWydmJywgJ0YnLCAnWyddLFxuICAgICAgICBbJ2cnLCAnRycsICddJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxNDInXSxcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDE0MSddLFxuICAgICAgICBbJ1xcdTAwRUInLCAnXFx1MDBDQicsICckJ10sXG4gICAgICAgIFsnQCcsICdcXCcnLCAnXFx1MDBENyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyc8JywgJz4nXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd4JywgJ1gnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWyd2JywgJ1YnLCAnQCddLFxuICAgICAgICBbJ2InLCAnQicsICd7J10sXG4gICAgICAgIFsnbicsICdOJywgJ30nXSxcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBBNyddLFxuICAgICAgICBbJywnLCAnOycsICc8J10sXG4gICAgICAgIFsnLicsICc6JywgJz4nXSxcbiAgICAgICAgWycvJywgJz8nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3NxJ11cbiAgfSxcbiAgJ1Nsb3ZlblxcdTAxMGRpbmEnOiB7XG4gICAgJ25hbWUnOiAnU2xvdmFrJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWyc7JywgJ1xcdTAwYjAnXSxcbiAgICAgICAgWycrJywgJzEnLCAnfiddLFxuICAgICAgICBbJ1xcdTAxM0UnLCAnMicsICdcXHUwMkM3J10sXG4gICAgICAgIFsnXFx1MDE2MScsICczJywgJ14nXSxcbiAgICAgICAgWydcXHUwMTBEJywgJzQnLCAnXFx1MDJEOCddLFxuICAgICAgICBbJ1xcdTAxNjUnLCAnNScsICdcXHUwMEIwJ10sXG4gICAgICAgIFsnXFx1MDE3RScsICc2JywgJ1xcdTAyREInXSxcbiAgICAgICAgWydcXHUwMEZEJywgJzcnLCAnYCddLFxuICAgICAgICBbJ1xcdTAwRTEnLCAnOCcsICdcXHUwMkQ5J10sXG4gICAgICAgIFsnXFx1MDBFRCcsICc5JywgJ1xcdTAwQjQnXSxcbiAgICAgICAgWydcXHUwMEU5JywgJzAnLCAnXFx1MDJERCddLFxuICAgICAgICBbJz0nLCAnJScsICdcXHUwMEE4J10sXG4gICAgICAgIFsnXFx1MDBCNCcsICdcXHUwMmM3JywgJ1xcdTAwQjgnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJ1xcXFwnXSxcbiAgICAgICAgWyd3JywgJ1cnLCAnfCddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJ10sXG4gICAgICAgIFsnbycsICdPJ10sXG4gICAgICAgIFsncCcsICdQJywgJ1xcJyddLFxuICAgICAgICBbJ1xcdTAwRkEnLCAnLycsICdcXHUwMEY3J10sXG4gICAgICAgIFsnXFx1MDBFNCcsICcoJywgJ1xcdTAwRDcnXSxcbiAgICAgICAgWydcXHUwMTQ4JywgJyknLCAnXFx1MDBBNCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnXSxcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDExMSddLFxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMTEwJ10sXG4gICAgICAgIFsnZicsICdGJywgJ1snXSxcbiAgICAgICAgWydnJywgJ0cnLCAnXSddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSycsICdcXHUwMTQyJ10sXG4gICAgICAgIFsnbCcsICdMJywgJ1xcdTAxNDEnXSxcbiAgICAgICAgWydcXHUwMEY0JywgJ1wiJywgJyQnXSxcbiAgICAgICAgWydcXHUwMEE3JywgJyEnLCAnXFx1MDBERiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWycmJywgJyonLCAnPCddLFxuICAgICAgICBbJ3knLCAnWScsICc+J10sXG4gICAgICAgIFsneCcsICdYJywgJyMnXSxcbiAgICAgICAgWydjJywgJ0MnLCAnJiddLFxuICAgICAgICBbJ3YnLCAnVicsICdAJ10sXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcbiAgICAgICAgWyduJywgJ04nLCAnfSddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJywnLCAnPycsICc8J10sXG4gICAgICAgIFsnLicsICc6JywgJz4nXSxcbiAgICAgICAgWyctJywgJ18nLCAnKiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnc2snXVxuICB9LFxuICAnXFx1MDQ0MVxcdTA0NDBcXHUwNDNmXFx1MDQ0MVxcdTA0M2FcXHUwNDM4Jzoge1xuICAgICduYW1lJzogJ1NlcmJpYW4gQ3lyaWxsaWMnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ2AnLCAnfiddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInXSxcbiAgICAgICAgWyczJywgJyMnXSxcbiAgICAgICAgWyc0JywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnXSxcbiAgICAgICAgWyc2JywgJyYnXSxcbiAgICAgICAgWyc3JywgJy8nXSxcbiAgICAgICAgWyc4JywgJygnXSxcbiAgICAgICAgWyc5JywgJyknXSxcbiAgICAgICAgWycwJywgJz0nXSxcbiAgICAgICAgWydcXCcnLCAnPyddLFxuICAgICAgICBbJysnLCAnKiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNDU5JywgJ1xcdTA0MDknXSxcbiAgICAgICAgWydcXHUwNDVhJywgJ1xcdTA0MGEnXSxcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxuICAgICAgICBbJ1xcdTA0M2UnLCAnXFx1MDQxZSddLFxuICAgICAgICBbJ1xcdTA0M2YnLCAnXFx1MDQxZiddLFxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxuICAgICAgICBbJ1xcdTA0NTInLCAnXFx1MDQwMiddLFxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcbiAgICAgICAgWydcXHUwNDU4JywgJ1xcdTA0MDgnXSxcbiAgICAgICAgWydcXHUwNDNhJywgJ1xcdTA0MWEnXSxcbiAgICAgICAgWydcXHUwNDNiJywgJ1xcdTA0MWInXSxcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcbiAgICAgICAgWydcXHUwNDViJywgJ1xcdTA0MGInXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+J10sXG4gICAgICAgIFsnXFx1MDQ1NScsICdcXHUwNDA1J10sXG4gICAgICAgIFsnXFx1MDQ1ZicsICdcXHUwNDBmJ10sXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXG4gICAgICAgIFsnXFx1MDQzZCcsICdcXHUwNDFkJ10sXG4gICAgICAgIFsnXFx1MDQzYycsICdcXHUwNDFjJ10sXG4gICAgICAgIFsnLCcsICc7JywgJzwnXSxcbiAgICAgICAgWycuJywgJzonLCAnPiddLFxuICAgICAgICBbJy0nLCAnXycsICdcXHUwMGE5J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydzci1DWVJMJ11cbiAgfSxcbiAgJ1N1b21pJzoge1xuICAgICduYW1lJzogJ0Zpbm5pc2gnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAwYTcnLCAnXFx1MDBCRCddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMEEzJ10sXG4gICAgICAgIFsnNCcsICdcXHUwMEE0JywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBBQyddLFxuICAgICAgICBbJzYnLCAnJiddLFxuICAgICAgICBbJzcnLCAnLycsICd7J10sXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxuICAgICAgICBbJzAnLCAnPScsICd9J10sXG4gICAgICAgIFsnKycsICc/JywgJ1xcXFwnXSxcbiAgICAgICAgWydcXHUwMEI0JywgJ2AnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJ1xcdTAwRTInLCAnXFx1MDBDMiddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJywgJ1xcdTAxNjcnLCAnXFx1MDE2NiddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMGVmJywgJ1xcdTAwQ0YnXSxcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBmNScsICdcXHUwMEQ1J10sXG4gICAgICAgIFsncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDBFNScsICdcXHUwMEM1J10sXG4gICAgICAgIFsnXFx1MDBBOCcsICdeJywgJ34nXSxcbiAgICAgICAgWydcXCcnLCAnKiddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBFMScsICdcXHUwMEMxJ10sXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAxNjEnLCAnXFx1MDE2MCddLFxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMTExJywgJ1xcdTAxMTAnXSxcbiAgICAgICAgWydmJywgJ0YnLCAnXFx1MDFlNScsICdcXHUwMUU0J10sXG4gICAgICAgIFsnZycsICdHJywgJ1xcdTAxRTcnLCAnXFx1MDFFNiddLFxuICAgICAgICBbJ2gnLCAnSCcsICdcXHUwMjFGJywgJ1xcdTAyMWUnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDFlOScsICdcXHUwMUU4J10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnXFx1MDBGNicsICdcXHUwMEQ2JywgJ1xcdTAwRjgnLCAnXFx1MDBEOCddLFxuICAgICAgICBbJ1xcdTAwRTQnLCAnXFx1MDBDNCcsICdcXHUwMEU2JywgJ1xcdTAwQzYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+JywgJ3wnXSxcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDE3RScsICdcXHUwMTdEJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTAxMGQnLCAnXFx1MDEwQyddLFxuICAgICAgICBbJ3YnLCAnVicsICdcXHUwMUVGJywgJ1xcdTAxRUUnXSxcbiAgICAgICAgWydiJywgJ0InLCAnXFx1MDI5MicsICdcXHUwMUI3J10sXG4gICAgICAgIFsnbicsICdOJywgJ1xcdTAxNEInLCAnXFx1MDE0QSddLFxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEI1J10sXG4gICAgICAgIFsnLCcsICc7J10sXG4gICAgICAgIFsnLicsICc6J10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydmaSddXG4gIH0sXG4gICdTdmVuc2thJzoge1xuICAgICduYW1lJzogJ1N3ZWRpc2gnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAwYTcnLCAnXFx1MDBiZCddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGEzJ10sXG4gICAgICAgIFsnNCcsICdcXHUwMGE0JywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJzYnLCAnJiddLFxuICAgICAgICBbJzcnLCAnLycsICd7J10sXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxuICAgICAgICBbJzAnLCAnPScsICd9J10sXG4gICAgICAgIFsnKycsICc/JywgJ1xcXFwnXSxcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMGU1JywgJ1xcdTAwYzUnXSxcbiAgICAgICAgWydcXHUwMGE4JywgJ14nLCAnfiddLFxuICAgICAgICBbJ1xcJycsICcqJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQSddLFxuICAgICAgICBbJ3MnLCAnUyddLFxuICAgICAgICBbJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRiddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSiddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ1xcdTAwZjYnLCAnXFx1MDBkNiddLFxuICAgICAgICBbJ1xcdTAwZTQnLCAnXFx1MDBjNCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyc8JywgJz4nLCAnfCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTScsICdcXHUwM2JjJywgJ1xcdTAzOWMnXSxcbiAgICAgICAgWycsJywgJzsnXSxcbiAgICAgICAgWycuJywgJzonXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3N2J11cbiAgfSxcbiAgJ1N3aXNzIEZyYW5cXHUwMGU3YWlzJzoge1xuICAgICduYW1lJzogJ1N3aXNzIEZyZW5jaCcsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDBBNycsICdcXHUwMEIwJ10sXG4gICAgICAgIFsnMScsICcrJywgJ1xcdTAwQTYnXSxcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcbiAgICAgICAgWyczJywgJyonLCAnIyddLFxuICAgICAgICBbJzQnLCAnXFx1MDBFNycsICdcXHUwMEIwJ10sXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwQTcnXSxcbiAgICAgICAgWyc2JywgJyYnLCAnXFx1MDBBQyddLFxuICAgICAgICBbJzcnLCAnLycsICd8J10sXG4gICAgICAgIFsnOCcsICcoJywgJ1xcdTAwQTInXSxcbiAgICAgICAgWyc5JywgJyknXSxcbiAgICAgICAgWycwJywgJz0nXSxcbiAgICAgICAgWydcXCcnLCAnPycsICdcXHUwMEI0J10sXG4gICAgICAgIFsnXicsICdgJywgJ34nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcbiAgICAgICAgWydyJywgJ1InXSxcbiAgICAgICAgWyd0JywgJ1QnXSxcbiAgICAgICAgWyd6JywgJ1onXSxcbiAgICAgICAgWyd1JywgJ1UnXSxcbiAgICAgICAgWydpJywgJ0knXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnXSxcbiAgICAgICAgWydcXHUwMEU4JywgJ1xcdTAwRkMnLCAnWyddLFxuICAgICAgICBbJ1xcdTAwQTgnLCAnIScsICddJ10sXG4gICAgICAgIFsnJCcsICdcXHUwMEEzJywgJ30nXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnYScsICdBJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnXFx1MDBFOScsICdcXHUwMEY2J10sXG4gICAgICAgIFsnXFx1MDBFMCcsICdcXHUwMEU0JywgJ3snXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnPCcsICc+JywgJ1xcXFwnXSxcbiAgICAgICAgWyd5JywgJ1knXSxcbiAgICAgICAgWyd4JywgJ1gnXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nXSxcbiAgICAgICAgWydtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzsnXSxcbiAgICAgICAgWycuJywgJzonXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ2ZyLUNIJ11cbiAgfSxcbiAgJ1xcdTA3MjNcXHUwNzE4XFx1MDcyYVxcdTA3MWRcXHUwNzFkXFx1MDcxMCc6IHtcbiAgICAnbmFtZSc6ICdTeXJpYWMnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTA3MGYnLCAnXFx1MDMyZScsICdcXHUwNjUxJywgJ1xcdTA2NTEnXSxcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDcwMScsICdcXHUwNzAxJ10sXG4gICAgICAgIFsnMicsICdcXHUwMzBhJywgJ1xcdTA3MDInLCAnXFx1MDcwMiddLFxuICAgICAgICBbJzMnLCAnXFx1MDMyNScsICdcXHUwNzAzJywgJ1xcdTA3MDMnXSxcbiAgICAgICAgWyc0JywgJ1xcdTA3NDknLCAnXFx1MDcwNCcsICdcXHUwNzA0J10sXG4gICAgICAgIFsnNScsICdcXHUyNjcwJywgJ1xcdTA3MDUnLCAnXFx1MDcwNSddLFxuICAgICAgICBbJzYnLCAnXFx1MjY3MScsICdcXHUwNzA4JywgJ1xcdTA3MDgnXSxcbiAgICAgICAgWyc3JywgJ1xcdTA3MGEnLCAnXFx1MDcwOScsICdcXHUwNzA5J10sXG4gICAgICAgIFsnOCcsICdcXHUwMGJiJywgJ1xcdTA3MEInLCAnXFx1MDcwQiddLFxuICAgICAgICBbJzknLCAnKScsICdcXHUwNzBDJywgJ1xcdTA3MEMnXSxcbiAgICAgICAgWycwJywgJygnLCAnXFx1MDcwRCcsICdcXHUwNzBEJ10sXG4gICAgICAgIFsnLScsICdcXHUwMGFiJywgJ1xcdTI1MEMnLCAnXFx1MjUwQyddLFxuICAgICAgICBbJz0nLCAnKycsICdcXHUyNTEwJywgJ1xcdTI1MTAnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDcxNCcsICdcXHUwNzMwJywgJ1xcdTA2NEUnLCAnXFx1MDY0RSddLFxuICAgICAgICBbJ1xcdTA3MjgnLCAnXFx1MDczMycsICdcXHUwNjRCJywgJ1xcdTA2NEInXSxcbiAgICAgICAgWydcXHUwNzE2JywgJ1xcdTA3MzYnLCAnXFx1MDY0RicsICdcXHUwNjRGJ10sXG4gICAgICAgIFsnXFx1MDcyOScsICdcXHUwNzNBJywgJ1xcdTA2NEMnLCAnXFx1MDY0QyddLFxuICAgICAgICBbJ1xcdTA3MjYnLCAnXFx1MDczRCcsICdcXHUwNjUzJywgJ1xcdTA2NTMnXSxcbiAgICAgICAgWydcXHUwNzFjJywgJ1xcdTA3NDAnLCAnXFx1MDY1NCcsICdcXHUwNjU0J10sXG4gICAgICAgIFsnXFx1MDcyNScsICdcXHUwNzQxJywgJ1xcdTA3NDcnLCAnXFx1MDc0NyddLFxuICAgICAgICBbJ1xcdTA3MTcnLCAnXFx1MDMwOCcsICdcXHUwNzQzJywgJ1xcdTA3NDMnXSxcbiAgICAgICAgWydcXHUwNzFlJywgJ1xcdTAzMDQnLCAnXFx1MDc0NScsICdcXHUwNzQ1J10sXG4gICAgICAgIFsnXFx1MDcxYScsICdcXHUwMzA3JywgJ1xcdTAzMkQnLCAnXFx1MDMyRCddLFxuICAgICAgICBbJ1xcdTA3MTMnLCAnXFx1MDMwMyddLFxuICAgICAgICBbJ1xcdTA3MTUnLCAnXFx1MDc0QSddLFxuICAgICAgICBbJ1xcdTA3MDYnLCAnOiddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNzJiJywgJ1xcdTA3MzEnLCAnXFx1MDY1MCcsICdcXHUwNjUwJ10sXG4gICAgICAgIFsnXFx1MDcyMycsICdcXHUwNzM0JywgJ1xcdTA2NGQnLCAnXFx1MDY0ZCddLFxuICAgICAgICBbJ1xcdTA3MWQnLCAnXFx1MDczNyddLFxuICAgICAgICBbJ1xcdTA3MTInLCAnXFx1MDczYicsICdcXHUwNjIxJywgJ1xcdTA2MjEnXSxcbiAgICAgICAgWydcXHUwNzIwJywgJ1xcdTA3M2UnLCAnXFx1MDY1NScsICdcXHUwNjU1J10sXG4gICAgICAgIFsnXFx1MDcxMCcsICdcXHUwNzExJywgJ1xcdTA2NzAnLCAnXFx1MDY3MCddLFxuICAgICAgICBbJ1xcdTA3MmMnLCAnXFx1MDY0MCcsICdcXHUwNzQ4JywgJ1xcdTA3NDgnXSxcbiAgICAgICAgWydcXHUwNzIyJywgJ1xcdTAzMjQnLCAnXFx1MDc0NCcsICdcXHUwNzQ0J10sXG4gICAgICAgIFsnXFx1MDcyMScsICdcXHUwMzMxJywgJ1xcdTA3NDYnLCAnXFx1MDc0NiddLFxuICAgICAgICBbJ1xcdTA3MWYnLCAnXFx1MDMyMyddLFxuICAgICAgICBbJ1xcdTA3MWInLCAnXFx1MDMzMCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyddJywgJ1xcdTA3MzInXSxcbiAgICAgICAgWydbJywgJ1xcdTA3MzUnLCAnXFx1MDY1MicsICdcXHUwNjUyJ10sXG4gICAgICAgIFsnXFx1MDcyNCcsICdcXHUwNzM4J10sXG4gICAgICAgIFsnXFx1MDcyYScsICdcXHUwNzNjJywgJ1xcdTIwMEQnXSxcbiAgICAgICAgWydcXHUwNzI3JywgJ1xcdTA3M2YnLCAnXFx1MjAwQyddLFxuICAgICAgICBbJ1xcdTA3MDAnLCAnXFx1MDczOScsICdcXHUyMDBFJ10sXG4gICAgICAgIFsnLicsICdcXHUwNzQyJywgJ1xcdTIwMEYnXSxcbiAgICAgICAgWydcXHUwNzE4JywgJ1xcdTA2MGMnXSxcbiAgICAgICAgWydcXHUwNzE5JywgJ1xcdTA2MWInXSxcbiAgICAgICAgWydcXHUwNzA3JywgJ1xcdTA2MUYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3N5YyddXG4gIH0sXG4gICdcXHUwYmE0XFx1MGJhZVxcdTBiYmZcXHUwYmI0XFx1MGJjZCc6IHtcbiAgICAnbmFtZSc6ICdUYW1pbCcsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MEJDQScsICdcXHUwQjkyJ10sXG4gICAgICAgIFsnMScsICcnLCAnXFx1MEJFNyddLFxuICAgICAgICBbJzInLCAnJywgJ1xcdTBCRTgnXSxcbiAgICAgICAgWyczJywgJycsICdcXHUwQkU5J10sXG4gICAgICAgIFsnNCcsICcnLCAnXFx1MEJFQSddLFxuICAgICAgICBbJzUnLCAnJywgJ1xcdTBCRUInXSxcbiAgICAgICAgWyc2JywgJ1xcdTBCQTRcXHUwQkNEXFx1MEJCMCcsICdcXHUwQkVDJ10sXG4gICAgICAgIFsnNycsICdcXHUwQjk1XFx1MEJDRFxcdTBCQjcnLCAnXFx1MEJFRCddLFxuICAgICAgICBbJzgnLCAnXFx1MEJCN1xcdTBCQ0RcXHUwQkIwJywgJ1xcdTBCRUUnXSxcbiAgICAgICAgWyc5JywgJycsICdcXHUwQkVGJ10sXG4gICAgICAgIFsnMCcsICcnLCAnXFx1MEJGMCddLFxuICAgICAgICBbJy0nLCAnXFx1MEI4MycsICdcXHUwQkYxJ10sXG4gICAgICAgIFsnJywgJycsICdcXHUwQkYyJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTBCQ0MnLCAnXFx1MEI5NCddLFxuICAgICAgICBbJ1xcdTBCQzgnLCAnXFx1MEI5MCddLFxuICAgICAgICBbJ1xcdTBCQkUnLCAnXFx1MEI4NiddLFxuICAgICAgICBbJ1xcdTBCQzAnLCAnXFx1MEI4OCddLFxuICAgICAgICBbJ1xcdTBCQzInLCAnXFx1MEI4QSddLFxuICAgICAgICBbJ1xcdTBCQUEnLCAnXFx1MEJBQSddLFxuICAgICAgICBbJ1xcdTBCQjknLCAnXFx1MEI5OSddLFxuICAgICAgICBbJ1xcdTBCOTUnLCAnXFx1MEI5NSddLFxuICAgICAgICBbJ1xcdTBCQTQnLCAnXFx1MEJBNCddLFxuICAgICAgICBbJ1xcdTBCOUMnLCAnXFx1MEI5QSddLFxuICAgICAgICBbJ1xcdTBCOUYnLCAnXFx1MEI5RiddLFxuICAgICAgICBbJ1xcdTBCOUUnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MEJDQicsICdcXHUwQjkzJ10sXG4gICAgICAgIFsnXFx1MEJDNycsICdcXHUwQjhGJ10sXG4gICAgICAgIFsnXFx1MEJDRCcsICdcXHUwQjg1J10sXG4gICAgICAgIFsnXFx1MEJCRicsICdcXHUwQjg3J10sXG4gICAgICAgIFsnXFx1MEJDMScsICdcXHUwQjg5J10sXG4gICAgICAgIFsnXFx1MEJBQScsICdcXHUwQkFBJ10sXG4gICAgICAgIFsnXFx1MEJCMCcsICdcXHUwQkIxJ10sXG4gICAgICAgIFsnXFx1MEI5NScsICdcXHUwQjk1J10sXG4gICAgICAgIFsnXFx1MEJBNCcsICdcXHUwQkE0J10sXG4gICAgICAgIFsnXFx1MEI5QScsICdcXHUwQjlBJ10sXG4gICAgICAgIFsnXFx1MEI5RicsICdcXHUwQjlGJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTBCQzYnLCAnXFx1MEI4RSddLFxuICAgICAgICBbJyddLFxuICAgICAgICBbJ1xcdTBCQUUnLCAnXFx1MEJBMyddLFxuICAgICAgICBbJ1xcdTBCQTgnLCAnXFx1MEJBOSddLFxuICAgICAgICBbJ1xcdTBCQjUnLCAnXFx1MEJCNCddLFxuICAgICAgICBbJ1xcdTBCQjInLCAnXFx1MEJCMyddLFxuICAgICAgICBbJ1xcdTBCQjgnLCAnXFx1MEJCNyddLFxuICAgICAgICBbJywnLCAnXFx1MEJCNyddLFxuICAgICAgICBbJy4nLCAnXFx1MEJCOFxcdTBCQ0RcXHUwQkIwXFx1MEJDMCddLFxuICAgICAgICBbJ1xcdTBCQUYnLCAnXFx1MEJBRiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsndGEnXVxuICB9LFxuICAnXFx1MGMyNFxcdTBjNDZcXHUwYzMyXFx1MGM0MVxcdTBjMTdcXHUwYzQxJzoge1xuICAgICduYW1lJzogJ1RlbHVndScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MEM0QScsICdcXHUwQzEyJ10sXG4gICAgICAgIFsnMScsICcnLCAnXFx1MEM2NyddLFxuICAgICAgICBbJzInLCAnJywgJ1xcdTBDNjgnXSxcbiAgICAgICAgWyczJywgJ1xcdTBDNERcXHUwQzMwJywgJ1xcdTBDNjknXSxcbiAgICAgICAgWyc0JywgJycsICdcXHUwQzZBJ10sXG4gICAgICAgIFsnNScsICdcXHUwQzFDXFx1MEM0RFxcdTBDMUUnLCAnXFx1MEM2QiddLFxuICAgICAgICBbJzYnLCAnXFx1MEMyNFxcdTBDNERcXHUwQzMwJywgJ1xcdTBDNkMnXSxcbiAgICAgICAgWyc3JywgJ1xcdTBDMTVcXHUwQzREXFx1MEMzNycsICdcXHUwQzZEJ10sXG4gICAgICAgIFsnOCcsICdcXHUwQzM2XFx1MEM0RFxcdTBDMzAnLCAnXFx1MEM2RSddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUwQzZGJ10sXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTBDNjYnXSxcbiAgICAgICAgWyctJywgJ1xcdTBDMDMnXSxcbiAgICAgICAgWydcXHUwQzQzJywgJ1xcdTBDMEInLCAnXFx1MEM0NCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwQzRDJywgJ1xcdTBDMTQnXSxcbiAgICAgICAgWydcXHUwQzQ4JywgJ1xcdTBDMTAnLCAnXFx1MEM1NiddLFxuICAgICAgICBbJ1xcdTBDM0UnLCAnXFx1MEMwNiddLFxuICAgICAgICBbJ1xcdTBDNDAnLCAnXFx1MEMwOCcsICcnLCAnXFx1MEM2MSddLFxuICAgICAgICBbJ1xcdTBDNDInLCAnXFx1MEMwQSddLFxuICAgICAgICBbJ1xcdTBDMkMnXSxcbiAgICAgICAgWydcXHUwQzM5JywgJ1xcdTBDMTknXSxcbiAgICAgICAgWydcXHUwQzE3JywgJ1xcdTBDMTgnXSxcbiAgICAgICAgWydcXHUwQzI2JywgJ1xcdTBDMjcnXSxcbiAgICAgICAgWydcXHUwQzFDJywgJ1xcdTBDMUQnXSxcbiAgICAgICAgWydcXHUwQzIxJywgJ1xcdTBDMjInXSxcbiAgICAgICAgWycnLCAnXFx1MEMxRSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwQzRCJywgJ1xcdTBDMTMnXSxcbiAgICAgICAgWydcXHUwQzQ3JywgJ1xcdTBDMEYnLCAnXFx1MEM1NSddLFxuICAgICAgICBbJ1xcdTBDNEQnLCAnXFx1MEMwNSddLFxuICAgICAgICBbJ1xcdTBDM0YnLCAnXFx1MEMwNycsICcnLCAnXFx1MEMwQyddLFxuICAgICAgICBbJ1xcdTBDNDEnLCAnXFx1MEMwOSddLFxuICAgICAgICBbJ1xcdTBDMkEnLCAnXFx1MEMyQiddLFxuICAgICAgICBbJ1xcdTBDMzAnLCAnXFx1MEMzMSddLFxuICAgICAgICBbJ1xcdTBDMTUnLCAnXFx1MEMxNiddLFxuICAgICAgICBbJ1xcdTBDMjQnLCAnXFx1MEMyNSddLFxuICAgICAgICBbJ1xcdTBDMUEnLCAnXFx1MEMxQiddLFxuICAgICAgICBbJ1xcdTBDMUYnLCAnXFx1MEMyNSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwQzQ2JywgJ1xcdTBDMEUnXSxcbiAgICAgICAgWydcXHUwQzAyJywgJ1xcdTBDMDEnXSxcbiAgICAgICAgWydcXHUwQzJFJywgJ1xcdTBDMjMnXSxcbiAgICAgICAgWydcXHUwQzI4JywgJ1xcdTBDMjgnXSxcbiAgICAgICAgWydcXHUwQzM1J10sXG4gICAgICAgIFsnXFx1MEMzMicsICdcXHUwQzMzJ10sXG4gICAgICAgIFsnXFx1MEMzOCcsICdcXHUwQzM2J10sXG4gICAgICAgIFsnLCcsICdcXHUwQzM3J10sXG4gICAgICAgIFsnLiddLFxuICAgICAgICBbJ1xcdTBDMkYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3RlJ11cbiAgfSxcbiAgJ1RpXFx1MWViZm5nIFZpXFx1MWVjN3QnOiB7XG4gICAgJ25hbWUnOiAnVmlldG5hbWVzZScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICd+JywgJ2AnLCAnfiddLFxuICAgICAgICBbJ1xcdTAxMDMnLCAnXFx1MDEwMicsICcxJywgJyEnXSxcbiAgICAgICAgWydcXHUwMEUyJywgJ1xcdTAwQzInLCAnMicsICdAJ10sXG4gICAgICAgIFsnXFx1MDBFQScsICdcXHUwMENBJywgJzMnLCAnIyddLFxuICAgICAgICBbJ1xcdTAwRjQnLCAnXFx1MDBENCcsICc0JywgJyQnXSxcbiAgICAgICAgWydcXHUwMzAwJywgJ1xcdTAzMDAnLCAnNScsICclJ10sXG4gICAgICAgIFsnXFx1MDMwOScsICdcXHUwMzA5JywgJzYnLCAnXiddLFxuICAgICAgICBbJ1xcdTAzMDMnLCAnXFx1MDMwMycsICc3JywgJyYnXSxcbiAgICAgICAgWydcXHUwMzAxJywgJ1xcdTAzMDEnLCAnOCcsICcqJ10sXG4gICAgICAgIFsnXFx1MDMyMycsICdcXHUwMzIzJywgJzknLCAnKCddLFxuICAgICAgICBbJ1xcdTAxMTEnLCAnXFx1MDExMCcsICcwJywgJyknXSxcbiAgICAgICAgWyctJywgJ18nLCAnLScsICdfJ10sXG4gICAgICAgIFsnXFx1MjBBQicsICcrJywgJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnLCAncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJywgJ3cnLCAnVyddLFxuICAgICAgICBbJ2UnLCAnRScsICdlJywgJ0UnXSxcbiAgICAgICAgWydyJywgJ1InLCAncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJywgJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWScsICd5JywgJ1knXSxcbiAgICAgICAgWyd1JywgJ1UnLCAndScsICdVJ10sXG4gICAgICAgIFsnaScsICdJJywgJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTycsICdvJywgJ08nXSxcbiAgICAgICAgWydwJywgJ1AnLCAncCcsICdQJ10sXG4gICAgICAgIFsnXFx1MDFCMCcsICdcXHUwMUFGJywgJ1snLCAneyddLFxuICAgICAgICBbJ1xcdTAxQTEnLCAnXFx1MDFBMCcsICddJywgJ30nXSxcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ2EnLCAnQScsICdhJywgJ0EnXSxcbiAgICAgICAgWydzJywgJ1MnLCAncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJywgJ2QnLCAnRCddLFxuICAgICAgICBbJ2YnLCAnRicsICdmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnLCAnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJywgJ2gnLCAnSCddLFxuICAgICAgICBbJ2onLCAnSicsICdqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snLCAnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJywgJ2wnLCAnTCddLFxuICAgICAgICBbJzsnLCAnOicsICc7JywgJzonXSxcbiAgICAgICAgWydcXCcnLCAnXCInLCAnXFwnJywgJ1wiJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ3onLCAnWicsICd6JywgJ1onXSxcbiAgICAgICAgWyd4JywgJ1gnLCAneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJywgJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnVicsICd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InLCAnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJywgJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTScsICdtJywgJ00nXSxcbiAgICAgICAgWycsJywgJzwnLCAnLCcsICc8J10sXG4gICAgICAgIFsnLicsICc+JywgJy4nLCAnPiddLFxuICAgICAgICBbJy8nLCAnPycsICcvJywgJz8nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3ZpJ11cbiAgfSxcbiAgJ1xcdTBlNDRcXHUwZTE3XFx1MGUyMiBLZWRtYW5lZSc6IHtcbiAgICAnbmFtZSc6ICdUaGFpIEtlZG1hbmVlJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydfJywgJyUnXSxcbiAgICAgICAgWydcXHUwRTQ1JywgJysnXSxcbiAgICAgICAgWycvJywgJ1xcdTBFNTEnXSxcbiAgICAgICAgWyctJywgJ1xcdTBFNTInXSxcbiAgICAgICAgWydcXHUwRTIwJywgJ1xcdTBFNTMnXSxcbiAgICAgICAgWydcXHUwRTE2JywgJ1xcdTBFNTQnXSxcbiAgICAgICAgWydcXHUwRTM4JywgJ1xcdTBFMzknXSxcbiAgICAgICAgWydcXHUwRTM2JywgJ1xcdTBFM0YnXSxcbiAgICAgICAgWydcXHUwRTA0JywgJ1xcdTBFNTUnXSxcbiAgICAgICAgWydcXHUwRTE1JywgJ1xcdTBFNTYnXSxcbiAgICAgICAgWydcXHUwRTA4JywgJ1xcdTBFNTcnXSxcbiAgICAgICAgWydcXHUwRTAyJywgJ1xcdTBFNTgnXSxcbiAgICAgICAgWydcXHUwRTBBJywgJ1xcdTBFNTknXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MEU0NicsICdcXHUwRTUwJ10sXG4gICAgICAgIFsnXFx1MEU0NCcsICdcIiddLFxuICAgICAgICBbJ1xcdTBFMzMnLCAnXFx1MEUwRSddLFxuICAgICAgICBbJ1xcdTBFMUUnLCAnXFx1MEUxMSddLFxuICAgICAgICBbJ1xcdTBFMzAnLCAnXFx1MEUxOCddLFxuICAgICAgICBbJ1xcdTBFMzEnLCAnXFx1MEU0RCddLFxuICAgICAgICBbJ1xcdTBFMzUnLCAnXFx1MEU0QSddLFxuICAgICAgICBbJ1xcdTBFMjMnLCAnXFx1MEUxMyddLFxuICAgICAgICBbJ1xcdTBFMTknLCAnXFx1MEUyRiddLFxuICAgICAgICBbJ1xcdTBFMjInLCAnXFx1MEUwRCddLFxuICAgICAgICBbJ1xcdTBFMUEnLCAnXFx1MEUxMCddLFxuICAgICAgICBbJ1xcdTBFMjUnLCAnLCddLFxuICAgICAgICBbJ1xcdTBFMDMnLCAnXFx1MEUwNSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwRTFGJywgJ1xcdTBFMjQnXSxcbiAgICAgICAgWydcXHUwRTJCJywgJ1xcdTBFMDYnXSxcbiAgICAgICAgWydcXHUwRTAxJywgJ1xcdTBFMEYnXSxcbiAgICAgICAgWydcXHUwRTE0JywgJ1xcdTBFNDInXSxcbiAgICAgICAgWydcXHUwRTQwJywgJ1xcdTBFMEMnXSxcbiAgICAgICAgWydcXHUwRTQ5JywgJ1xcdTBFNDcnXSxcbiAgICAgICAgWydcXHUwRTQ4JywgJ1xcdTBFNEInXSxcbiAgICAgICAgWydcXHUwRTMyJywgJ1xcdTBFMjknXSxcbiAgICAgICAgWydcXHUwRTJBJywgJ1xcdTBFMjgnXSxcbiAgICAgICAgWydcXHUwRTI3JywgJ1xcdTBFMEInXSxcbiAgICAgICAgWydcXHUwRTA3JywgJy4nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MEUxQycsICcoJ10sXG4gICAgICAgIFsnXFx1MEUxQicsICcpJ10sXG4gICAgICAgIFsnXFx1MEU0MScsICdcXHUwRTA5J10sXG4gICAgICAgIFsnXFx1MEUyRCcsICdcXHUwRTJFJ10sXG4gICAgICAgIFsnXFx1MEUzNCcsICdcXHUwRTNBJ10sXG4gICAgICAgIFsnXFx1MEUzNycsICdcXHUwRTRDJ10sXG4gICAgICAgIFsnXFx1MEUxNycsICc/J10sXG4gICAgICAgIFsnXFx1MEUyMScsICdcXHUwRTEyJ10sXG4gICAgICAgIFsnXFx1MEU0MycsICdcXHUwRTJDJ10sXG4gICAgICAgIFsnXFx1MEUxRCcsICdcXHUwRTI2J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsndGgnXVxuICB9LFxuICAnXFx1MGU0NFxcdTBlMTdcXHUwZTIyIFBhdHRhY2hvdGUnOiB7XG4gICAgJ25hbWUnOiAnVGhhaSBQYXR0YWNob3RlJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydfJywgJ1xcdTBFM0YnXSxcbiAgICAgICAgWyc9JywgJysnXSxcbiAgICAgICAgWydcXHUwRTUyJywgJ1wiJ10sXG4gICAgICAgIFsnXFx1MEU1MycsICcvJ10sXG4gICAgICAgIFsnXFx1MEU1NCcsICcsJ10sXG4gICAgICAgIFsnXFx1MEU1NScsICc/J10sXG4gICAgICAgIFsnXFx1MEUzOScsICdcXHUwRTM4J10sXG4gICAgICAgIFsnXFx1MEU1NycsICdfJ10sXG4gICAgICAgIFsnXFx1MEU1OCcsICcuJ10sXG4gICAgICAgIFsnXFx1MEU1OScsICcoJ10sXG4gICAgICAgIFsnXFx1MEU1MCcsICcpJ10sXG4gICAgICAgIFsnXFx1MEU1MScsICctJ10sXG4gICAgICAgIFsnXFx1MEU1NicsICclJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTBFNDcnLCAnXFx1MEU0QSddLFxuICAgICAgICBbJ1xcdTBFMTUnLCAnXFx1MEUyNCddLFxuICAgICAgICBbJ1xcdTBFMjInLCAnXFx1MEU0NiddLFxuICAgICAgICBbJ1xcdTBFMkQnLCAnXFx1MEUwRCddLFxuICAgICAgICBbJ1xcdTBFMjMnLCAnXFx1MEUyOSddLFxuICAgICAgICBbJ1xcdTBFNDgnLCAnXFx1MEUzNiddLFxuICAgICAgICBbJ1xcdTBFMTQnLCAnXFx1MEUxRCddLFxuICAgICAgICBbJ1xcdTBFMjEnLCAnXFx1MEUwQiddLFxuICAgICAgICBbJ1xcdTBFMjcnLCAnXFx1MEUxNiddLFxuICAgICAgICBbJ1xcdTBFNDEnLCAnXFx1MEUxMiddLFxuICAgICAgICBbJ1xcdTBFNDMnLCAnXFx1MEUyRiddLFxuICAgICAgICBbJ1xcdTBFMEMnLCAnXFx1MEUyNiddLFxuICAgICAgICBbJ1xcdUY4QzcnLCAnXFx1MEU0RCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwRTQ5JywgJ1xcdTBFNEInXSxcbiAgICAgICAgWydcXHUwRTE3JywgJ1xcdTBFMTgnXSxcbiAgICAgICAgWydcXHUwRTA3JywgJ1xcdTBFMzMnXSxcbiAgICAgICAgWydcXHUwRTAxJywgJ1xcdTBFMTMnXSxcbiAgICAgICAgWydcXHUwRTMxJywgJ1xcdTBFNEMnXSxcbiAgICAgICAgWydcXHUwRTM1JywgJ1xcdTBFMzcnXSxcbiAgICAgICAgWydcXHUwRTMyJywgJ1xcdTBFMUMnXSxcbiAgICAgICAgWydcXHUwRTE5JywgJ1xcdTBFMEEnXSxcbiAgICAgICAgWydcXHUwRTQwJywgJ1xcdTBFNDInXSxcbiAgICAgICAgWydcXHUwRTQ0JywgJ1xcdTBFMDYnXSxcbiAgICAgICAgWydcXHUwRTAyJywgJ1xcdTBFMTEnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MEUxQScsICdcXHUwRTBFJ10sXG4gICAgICAgIFsnXFx1MEUxQicsICdcXHUwRTBGJ10sXG4gICAgICAgIFsnXFx1MEUyNScsICdcXHUwRTEwJ10sXG4gICAgICAgIFsnXFx1MEUyQicsICdcXHUwRTIwJ10sXG4gICAgICAgIFsnXFx1MEUzNCcsICdcXHUwRTMxJ10sXG4gICAgICAgIFsnXFx1MEUwNCcsICdcXHUwRTI4J10sXG4gICAgICAgIFsnXFx1MEUyQScsICdcXHUwRTJFJ10sXG4gICAgICAgIFsnXFx1MEUzMCcsICdcXHUwRTFGJ10sXG4gICAgICAgIFsnXFx1MEUwOCcsICdcXHUwRTA5J10sXG4gICAgICAgIFsnXFx1MEUxRScsICdcXHUwRTJDJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXG4gICAgICBdXG4gICAgXVxuICB9LFxuICAnXFx1MDQyMlxcdTA0MzBcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQ3XFx1MDQzMCc6IHtcbiAgICAnbmFtZSc6ICdUYXRhcicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDRCQicsICdcXHUwNEJBJywgJ1xcdTA0NTEnLCAnXFx1MDQwMSddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxuICAgICAgICBbJzMnLCAnXFx1MjExNicsICcjJ10sXG4gICAgICAgIFsnNCcsICc7JywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnXSxcbiAgICAgICAgWyc2JywgJzonXSxcbiAgICAgICAgWyc3JywgJz8nLCAnWyddLFxuICAgICAgICBbJzgnLCAnKicsICddJ10sXG4gICAgICAgIFsnOScsICcoJywgJ3snXSxcbiAgICAgICAgWycwJywgJyknLCAnfSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcbiAgICAgICAgWydcXHUwNEU5JywgJ1xcdTA0RTgnLCAnXFx1MDQ0NicsICdcXHUwNDI2J10sXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXG4gICAgICAgIFsnXFx1MDREOScsICdcXHUwNEQ4JywgJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxuICAgICAgICBbJ1xcdTA0QUYnLCAnXFx1MDRBRScsICdcXHUwNDRBJywgJ1xcdTA0MkEnXSxcbiAgICAgICAgWydcXFxcJywgJy8nXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXG4gICAgICAgIFsnXFx1MDQ0QicsICdcXHUwNDJCJ10sXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXG4gICAgICAgIFsnXFx1MDRBMycsICdcXHUwNEEyJywgJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxuICAgICAgICBbJ1xcdTA0NEQnLCAnXFx1MDQyRCcsICdcXCcnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDQ5MScsICdcXHUwNDkwJ10sXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXG4gICAgICAgIFsnXFx1MDQ5NycsICdcXHUwNDk2JywgJ1xcdTA0NEMnLCAnXFx1MDQyQyddLFxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMScsICc8J10sXG4gICAgICAgIFsnXFx1MDQ0RScsICdcXHUwNDJFJywgJz4nXSxcbiAgICAgICAgWycuJywgJywnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3R0J11cbiAgfSxcbiAgJ1RcXHUwMGZjcmtcXHUwMGU3ZSBGJzoge1xuICAgICduYW1lJzogJ1R1cmtpc2ggRicsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnKycsICcqJywgJ1xcdTAwYWMnXSxcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBiOScsICdcXHUwMGExJ10sXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMGIyJ10sXG4gICAgICAgIFsnMycsICdeJywgJyMnLCAnXFx1MDBiMyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGJjJywgJ1xcdTAwYTQnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBiZCddLFxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMGJlJ10sXG4gICAgICAgIFsnNycsICdcXCcnLCAneyddLFxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXG4gICAgICAgIFsnOScsICcpJywgJ10nXSxcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxuICAgICAgICBbJy8nLCAnPycsICdcXFxcJywgJ1xcdTAwYmYnXSxcbiAgICAgICAgWyctJywgJ18nLCAnfCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydmJywgJ0YnLCAnQCddLFxuICAgICAgICBbJ2cnLCAnRyddLFxuICAgICAgICBbJ1xcdTAxMWYnLCAnXFx1MDExZSddLFxuICAgICAgICBbJ1xcdTAxMzEnLCAnSScsICdcXHUwMGI2JywgJ1xcdTAwYWUnXSxcbiAgICAgICAgWydvJywgJ08nXSxcbiAgICAgICAgWydkJywgJ0QnLCAnXFx1MDBhNSddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ2gnLCAnSCcsICdcXHUwMGY4JywgJ1xcdTAwZDgnXSxcbiAgICAgICAgWydwJywgJ1AnLCAnXFx1MDBhMyddLFxuICAgICAgICBbJ3EnLCAnUScsICdcXHUwMGE4J10sXG4gICAgICAgIFsndycsICdXJywgJ34nXSxcbiAgICAgICAgWyd4JywgJ1gnLCAnYCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWyd1JywgJ1UnLCAnXFx1MDBlNicsICdcXHUwMGM2J10sXG4gICAgICAgIFsnaScsICdcXHUwMTMwJywgJ1xcdTAwZGYnLCAnXFx1MDBhNyddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXG4gICAgICAgIFsnYScsICdBJywgJyAnLCAnXFx1MDBhYSddLFxuICAgICAgICBbJ1xcdTAwZmMnLCAnXFx1MDBkYyddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ2snLCAnSyddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJ2wnLCAnTCddLFxuICAgICAgICBbJ3knLCAnWScsICdcXHUwMGI0J10sXG4gICAgICAgIFsnXFx1MDE1ZicsICdcXHUwMTVlJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJzwnLCAnPicsICd8JywgJ1xcdTAwYTYnXSxcbiAgICAgICAgWydqJywgJ0onLCAnXFx1MDBhYicsICc8J10sXG4gICAgICAgIFsnXFx1MDBmNicsICdcXHUwMGQ2JywgJ1xcdTAwYmInLCAnPiddLFxuICAgICAgICBbJ3YnLCAnVicsICdcXHUwMGEyJywgJ1xcdTAwYTknXSxcbiAgICAgICAgWydjJywgJ0MnXSxcbiAgICAgICAgWydcXHUwMGU3JywgJ1xcdTAwYzcnXSxcbiAgICAgICAgWyd6JywgJ1onXSxcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDBiNScsICdcXHUwMGJhJ10sXG4gICAgICAgIFsnYicsICdCJywgJ1xcdTAwZDcnXSxcbiAgICAgICAgWycuJywgJzonLCAnXFx1MDBmNyddLFxuICAgICAgICBbJywnLCAnOycsICctJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gICdUXFx1MDBmY3JrXFx1MDBlN2UgUSc6IHtcbiAgICAnbmFtZSc6ICdUdXJraXNoIFEnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1wiJywgJ1xcdTAwZTknLCAnPCddLFxuICAgICAgICBbJzEnLCAnIScsICc+J10sXG4gICAgICAgIFsnMicsICdcXCcnLCAnXFx1MDBhMyddLFxuICAgICAgICBbJzMnLCAnXicsICcjJ10sXG4gICAgICAgIFsnNCcsICcrJywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBiZCddLFxuICAgICAgICBbJzYnLCAnJiddLFxuICAgICAgICBbJzcnLCAnLycsICd7J10sXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxuICAgICAgICBbJzAnLCAnPScsICd9J10sXG4gICAgICAgIFsnKicsICc/JywgJ1xcXFwnXSxcbiAgICAgICAgWyctJywgJ18nLCAnfCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydxJywgJ1EnLCAnQCddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXG4gICAgICAgIFsncicsICdSJ10sXG4gICAgICAgIFsndCcsICdUJ10sXG4gICAgICAgIFsneScsICdZJ10sXG4gICAgICAgIFsndScsICdVJ10sXG4gICAgICAgIFsnXFx1MDEzMScsICdJJywgJ2knLCAnXFx1MDEzMCddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1xcdTAxMWYnLCAnXFx1MDExZScsICdcXHUwMGE4J10sXG4gICAgICAgIFsnXFx1MDBmYycsICdcXHUwMGRjJywgJ34nXSxcbiAgICAgICAgWycsJywgJzsnLCAnYCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBlNicsICdcXHUwMGM2J10sXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAwZGYnXSxcbiAgICAgICAgWydkJywgJ0QnXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snXSxcbiAgICAgICAgWydsJywgJ0wnXSxcbiAgICAgICAgWydcXHUwMTVmJywgJ1xcdTAxNWUnLCAnXFx1MDBiNCddLFxuICAgICAgICBbJ2knLCAnXFx1MDEzMCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWyc8JywgJz4nLCAnfCddLFxuICAgICAgICBbJ3onLCAnWiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQyddLFxuICAgICAgICBbJ3YnLCAnViddLFxuICAgICAgICBbJ2InLCAnQiddLFxuICAgICAgICBbJ24nLCAnTiddLFxuICAgICAgICBbJ20nLCAnTSddLFxuICAgICAgICBbJ1xcdTAwZjYnLCAnXFx1MDBkNiddLFxuICAgICAgICBbJ1xcdTAwZTcnLCAnXFx1MDBjNyddLFxuICAgICAgICBbJy4nLCAnOiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsndHInXVxuICB9LFxuICAnXFx1MDQyM1xcdTA0M2FcXHUwNDQwXFx1MDQzMFxcdTA0NTdcXHUwNDNkXFx1MDQ0MVxcdTA0NGNcXHUwNDNhXFx1MDQzMCc6IHtcbiAgICAnbmFtZSc6ICdVa3JhaW5pYW4nLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTAwYjQnLCAnfiddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnXCInXSxcbiAgICAgICAgWyczJywgJ1xcdTIxMTYnXSxcbiAgICAgICAgWyc0JywgJzsnXSxcbiAgICAgICAgWyc1JywgJyUnXSxcbiAgICAgICAgWyc2JywgJzonXSxcbiAgICAgICAgWyc3JywgJz8nXSxcbiAgICAgICAgWyc4JywgJyonXSxcbiAgICAgICAgWyc5JywgJygnXSxcbiAgICAgICAgWycwJywgJyknXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgWyc9JywgJysnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXG4gICAgICAgIFsnXFx1MDQ0OScsICdcXHUwNDI5J10sXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXG4gICAgICAgIFsnXFx1MDQ1NycsICdcXHUwNDA3J10sXG4gICAgICAgIFsnXFx1MDQ5MScsICdcXHUwNDkwJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxuICAgICAgICBbJ1xcdTA0NTYnLCAnXFx1MDQwNiddLFxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxuICAgICAgICBbJ1xcdTA0M0UnLCAnXFx1MDQxRSddLFxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxuICAgICAgICBbJ1xcdTA0NTQnLCAnXFx1MDQwNCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwNDRGJywgJ1xcdTA0MkYnXSxcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcbiAgICAgICAgWydcXHUwNDRDJywgJ1xcdTA0MkMnXSxcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcbiAgICAgICAgWydcXHUwNDRFJywgJ1xcdTA0MkUnXSxcbiAgICAgICAgWycuJywgJywnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWyd1ayddXG4gIH0sXG4gICdVbml0ZWQgS2luZ2RvbSc6IHtcbiAgICAnbmFtZSc6ICdVbml0ZWQgS2luZ2RvbScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICdcXHUwMGFjJywgJ1xcdTAwYTYnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJ10sXG4gICAgICAgIFsnMycsICdcXHUwMGEzJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTIwYWMnXSxcbiAgICAgICAgWyc1JywgJyUnXSxcbiAgICAgICAgWyc2JywgJ14nXSxcbiAgICAgICAgWyc3JywgJyYnXSxcbiAgICAgICAgWyc4JywgJyonXSxcbiAgICAgICAgWyc5JywgJygnXSxcbiAgICAgICAgWycwJywgJyknXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgWyc9JywgJysnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJ10sXG4gICAgICAgIFsndycsICdXJ10sXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTAwZTknLCAnXFx1MDBjOSddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMGZhJywgJ1xcdTAwZGEnXSxcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBlZCcsICdcXHUwMGNkJ10sXG4gICAgICAgIFsnbycsICdPJywgJ1xcdTAwZjMnLCAnXFx1MDBkMyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1snLCAneyddLFxuICAgICAgICBbJ10nLCAnfSddLFxuICAgICAgICBbJyMnLCAnfiddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBlMScsICdcXHUwMGMxJ10sXG4gICAgICAgIFsncycsICdTJ10sXG4gICAgICAgIFsnZCcsICdEJ10sXG4gICAgICAgIFsnZicsICdGJ10sXG4gICAgICAgIFsnZycsICdHJ10sXG4gICAgICAgIFsnaCcsICdIJ10sXG4gICAgICAgIFsnaicsICdKJ10sXG4gICAgICAgIFsnaycsICdLJ10sXG4gICAgICAgIFsnbCcsICdMJ10sXG4gICAgICAgIFsnOycsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ0AnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFxcXCcsICd8J10sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsndicsICdWJ10sXG4gICAgICAgIFsnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnLCcsICc8J10sXG4gICAgICAgIFsnLicsICc+J10sXG4gICAgICAgIFsnLycsICc/J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydlbi1HQiddXG4gIH0sXG4gICdcXHUwNjI3XFx1MDYzMVxcdTA2MmZcXHUwNjQ4Jzoge1xuICAgICduYW1lJzogJ1VyZHUnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ2AnLCAnfiddLFxuICAgICAgICBbJzEnLCAnISddLFxuICAgICAgICBbJzInLCAnQCddLFxuICAgICAgICBbJzMnLCAnIyddLFxuICAgICAgICBbJzQnLCAnJCddLFxuICAgICAgICBbJzUnLCAnXFx1MDY2QSddLFxuICAgICAgICBbJzYnLCAnXiddLFxuICAgICAgICBbJzcnLCAnXFx1MDZENiddLFxuICAgICAgICBbJzgnLCAnXFx1MDY2RCddLFxuICAgICAgICBbJzknLCAnKSddLFxuICAgICAgICBbJzAnLCAnKCddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNjM3JywgJ1xcdTA2MzgnXSxcbiAgICAgICAgWydcXHUwNjM1JywgJ1xcdTA2MzYnXSxcbiAgICAgICAgWydcXHUwNmJlJywgJ1xcdTA2MzAnXSxcbiAgICAgICAgWydcXHUwNjJmJywgJ1xcdTA2ODgnXSxcbiAgICAgICAgWydcXHUwNjc5JywgJ1xcdTA2MkInXSxcbiAgICAgICAgWydcXHUwNjdlJywgJ1xcdTA2NTEnXSxcbiAgICAgICAgWydcXHUwNjJhJywgJ1xcdTA2QzMnXSxcbiAgICAgICAgWydcXHUwNjI4JywgJ1xcdTA2NDAnXSxcbiAgICAgICAgWydcXHUwNjJjJywgJ1xcdTA2ODYnXSxcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2MkUnXSxcbiAgICAgICAgWyddJywgJ30nXSxcbiAgICAgICAgWydbJywgJ3snXSxcbiAgICAgICAgWydcXFxcJywgJ3wnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MDY0NScsICdcXHUwNjk4J10sXG4gICAgICAgIFsnXFx1MDY0OCcsICdcXHUwNjMyJ10sXG4gICAgICAgIFsnXFx1MDYzMScsICdcXHUwNjkxJ10sXG4gICAgICAgIFsnXFx1MDY0NicsICdcXHUwNkJBJ10sXG4gICAgICAgIFsnXFx1MDY0NCcsICdcXHUwNkMyJ10sXG4gICAgICAgIFsnXFx1MDZjMScsICdcXHUwNjIxJ10sXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIyJ10sXG4gICAgICAgIFsnXFx1MDZBOScsICdcXHUwNkFGJ10sXG4gICAgICAgIFsnXFx1MDZDQycsICdcXHUwNjRBJ10sXG4gICAgICAgIFsnXFx1MDYxYicsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTA2NDInLCAnXFx1MjAwRCddLFxuICAgICAgICBbJ1xcdTA2NDEnLCAnXFx1MjAwQyddLFxuICAgICAgICBbJ1xcdTA2RDInLCAnXFx1MDZEMyddLFxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MjAwRSddLFxuICAgICAgICBbJ1xcdTA2MzQnLCAnXFx1MDYyNCddLFxuICAgICAgICBbJ1xcdTA2M2EnLCAnXFx1MDYyNiddLFxuICAgICAgICBbJ1xcdTA2MzknLCAnXFx1MjAwRiddLFxuICAgICAgICBbJ1xcdTA2MEMnLCAnPiddLFxuICAgICAgICBbJ1xcdTA2RDQnLCAnPCddLFxuICAgICAgICBbJy8nLCAnXFx1MDYxRiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3VyJ11cbiAgfSxcbiAgJ1xcdTA2MjdcXHUwNjMxXFx1MDYyZlxcdTA2NDggUGhvbmV0aWMnOiB7XG4gICAgJ25hbWUnOiAnVXJkdSBQaG9uZXRpYycsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnXFx1MDY0RCcsICdcXHUwNjRCJywgJ34nXSxcbiAgICAgICAgWydcXHUwNkYxJywgJzEnLCAnISddLFxuICAgICAgICBbJ1xcdTA2RjInLCAnMicsICdAJ10sXG4gICAgICAgIFsnXFx1MDZGMycsICczJywgJyMnXSxcbiAgICAgICAgWydcXHUwNkY0JywgJzQnLCAnJCddLFxuICAgICAgICBbJ1xcdTA2RjUnLCAnNScsICdcXHUwNjZBJ10sXG4gICAgICAgIFsnXFx1MDZGNicsICc2JywgJ14nXSxcbiAgICAgICAgWydcXHUwNkY3JywgJzcnLCAnJiddLFxuICAgICAgICBbJ1xcdTA2RjgnLCAnOCcsICcqJ10sXG4gICAgICAgIFsnXFx1MDZGOScsICc5JywgJygnXSxcbiAgICAgICAgWydcXHUwNkYwJywgJzAnLCAnKSddLFxuICAgICAgICBbJy0nLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUwNjQyJywgJ1xcdTA2NTInXSxcbiAgICAgICAgWydcXHUwNjQ4JywgJ1xcdTA2NTEnLCAnXFx1MDYwMiddLFxuICAgICAgICBbJ1xcdTA2MzknLCAnXFx1MDY3MCcsICdcXHUwNjU2J10sXG4gICAgICAgIFsnXFx1MDYzMScsICdcXHUwNjkxJywgJ1xcdTA2MTMnXSxcbiAgICAgICAgWydcXHUwNjJBJywgJ1xcdTA2NzknLCAnXFx1MDYxNCddLFxuICAgICAgICBbJ1xcdTA2RDInLCAnXFx1MDY0RScsICdcXHUwNjAxJ10sXG4gICAgICAgIFsnXFx1MDYyMScsICdcXHUwNjI2JywgJ1xcdTA2NTQnXSxcbiAgICAgICAgWydcXHUwNkNDJywgJ1xcdTA2NTAnLCAnXFx1MDYxMSddLFxuICAgICAgICBbJ1xcdTA2QzEnLCAnXFx1MDZDMyddLFxuICAgICAgICBbJ1xcdTA2N0UnLCAnXFx1MDY0RicsICdcXHUwNjU3J10sXG4gICAgICAgIFsnWycsICd7J10sXG4gICAgICAgIFsnXScsICd9J10sXG4gICAgICAgIFsnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA2MjcnLCAnXFx1MDYyMicsICdcXHVGREYyJ10sXG4gICAgICAgIFsnXFx1MDYzMycsICdcXHUwNjM1JywgJ1xcdTA2MTAnXSxcbiAgICAgICAgWydcXHUwNjJGJywgJ1xcdTA2ODgnLCAnXFx1RkRGQSddLFxuICAgICAgICBbJ1xcdTA2NDEnXSxcbiAgICAgICAgWydcXHUwNkFGJywgJ1xcdTA2M0EnXSxcbiAgICAgICAgWydcXHUwNjJEJywgJ1xcdTA2QkUnLCAnXFx1MDYxMiddLFxuICAgICAgICBbJ1xcdTA2MkMnLCAnXFx1MDYzNicsICdcXHVGREZCJ10sXG4gICAgICAgIFsnXFx1MDZBOScsICdcXHUwNjJFJ10sXG4gICAgICAgIFsnXFx1MDY0NCddLFxuICAgICAgICBbJ1xcdTA2MUInLCAnOiddLFxuICAgICAgICBbJ1xcJycsICdcIiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwNjMyJywgJ1xcdTA2MzAnLCAnXFx1MDYwRiddLFxuICAgICAgICBbJ1xcdTA2MzQnLCAnXFx1MDY5OCcsICdcXHUwNjBFJ10sXG4gICAgICAgIFsnXFx1MDY4NicsICdcXHUwNjJCJywgJ1xcdTA2MDMnXSxcbiAgICAgICAgWydcXHUwNjM3JywgJ1xcdTA2MzgnXSxcbiAgICAgICAgWydcXHUwNjI4JywgJycsICdcXHVGREZEJ10sXG4gICAgICAgIFsnXFx1MDY0NicsICdcXHUwNkJBJywgJ1xcdTA2MDAnXSxcbiAgICAgICAgWydcXHUwNjQ1JywgJ1xcdTA2NTgnXSxcbiAgICAgICAgWydcXHUwNjBDJywgJycsICc8J10sXG4gICAgICAgIFsnXFx1MDZENCcsICdcXHUwNjZCJywgJz4nXSxcbiAgICAgICAgWycvJywgJ1xcdTA2MUYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gICdVUyBTdGFuZGFyZCc6IHtcbiAgICAnbmFtZSc6ICdVUyBTdGFuZGFyZCcsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnYCcsICd+J10sXG4gICAgICAgIFsnMScsICchJ10sXG4gICAgICAgIFsnMicsICdAJ10sXG4gICAgICAgIFsnMycsICcjJ10sXG4gICAgICAgIFsnNCcsICckJ10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICdeJ10sXG4gICAgICAgIFsnNycsICcmJ10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcoJ10sXG4gICAgICAgIFsnMCcsICcpJ10sXG4gICAgICAgIFsnLScsICdfJ10sXG4gICAgICAgIFsnPScsICcrJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ3EnLCAnUSddLFxuICAgICAgICBbJ3cnLCAnVyddLFxuICAgICAgICBbJ2UnLCAnRSddLFxuICAgICAgICBbJ3InLCAnUiddLFxuICAgICAgICBbJ3QnLCAnVCddLFxuICAgICAgICBbJ3knLCAnWSddLFxuICAgICAgICBbJ3UnLCAnVSddLFxuICAgICAgICBbJ2knLCAnSSddLFxuICAgICAgICBbJ28nLCAnTyddLFxuICAgICAgICBbJ3AnLCAnUCddLFxuICAgICAgICBbJ1snLCAneyddLFxuICAgICAgICBbJ10nLCAnfSddLFxuICAgICAgICBbJ1xcXFwnLCAnfCddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnXSxcbiAgICAgICAgWydzJywgJ1MnXSxcbiAgICAgICAgWydkJywgJ0QnXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snXSxcbiAgICAgICAgWydsJywgJ0wnXSxcbiAgICAgICAgWyc7JywgJzonXSxcbiAgICAgICAgWydcXCcnLCAnXCInXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsneicsICdaJ10sXG4gICAgICAgIFsneCcsICdYJ10sXG4gICAgICAgIFsnYycsICdDJ10sXG4gICAgICAgIFsndicsICdWJ10sXG4gICAgICAgIFsnYicsICdCJ10sXG4gICAgICAgIFsnbicsICdOJ10sXG4gICAgICAgIFsnbScsICdNJ10sXG4gICAgICAgIFsnLCcsICc8J10sXG4gICAgICAgIFsnLicsICc+J10sXG4gICAgICAgIFsnLycsICc/J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsnZW4tVVMnXVxuICB9LFxuICAnVVMgSW50ZXJuYXRpb25hbCc6IHtcbiAgICAnbmFtZSc6ICdVUyBJbnRlcm5hdGlvbmFsJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydgJywgJ34nXSxcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBhMScsICdcXHUwMGI5J10sXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTAwYjInXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGE0JywgJ1xcdTAwYTMnXSxcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMGJjJ10sXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTAwYmQnXSxcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBiZSddLFxuICAgICAgICBbJzknLCAnKCcsICdcXHUyMDE4J10sXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTIwMTknXSxcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBhNSddLFxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMGQ3JywgJ1xcdTAwZjcnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsncScsICdRJywgJ1xcdTAwZTQnLCAnXFx1MDBjNCddLFxuICAgICAgICBbJ3cnLCAnVycsICdcXHUwMGU1JywgJ1xcdTAwYzUnXSxcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MDBlOScsICdcXHUwMGM5J10sXG4gICAgICAgIFsncicsICdSJywgJ1xcdTAwYWUnXSxcbiAgICAgICAgWyd0JywgJ1QnLCAnXFx1MDBmZScsICdcXHUwMGRlJ10sXG4gICAgICAgIFsneScsICdZJywgJ1xcdTAwZmMnLCAnXFx1MDBkYyddLFxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMGZhJywgJ1xcdTAwZGEnXSxcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBlZCcsICdcXHUwMGNkJ10sXG4gICAgICAgIFsnbycsICdPJywgJ1xcdTAwZjMnLCAnXFx1MDBkMyddLFxuICAgICAgICBbJ3AnLCAnUCcsICdcXHUwMGY2JywgJ1xcdTAwZDYnXSxcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MDBhYiddLFxuICAgICAgICBbJ10nLCAnfScsICdcXHUwMGJiJ10sXG4gICAgICAgIFsnXFxcXCcsICd8JywgJ1xcdTAwYWMnLCAnXFx1MDBhNiddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBlMScsICdcXHUwMGMxJ10sXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAwZGYnLCAnXFx1MDBhNyddLFxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMGYwJywgJ1xcdTAwZDAnXSxcbiAgICAgICAgWydmJywgJ0YnXSxcbiAgICAgICAgWydnJywgJ0cnXSxcbiAgICAgICAgWydoJywgJ0gnXSxcbiAgICAgICAgWydqJywgJ0onXSxcbiAgICAgICAgWydrJywgJ0snXSxcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDBmOCcsICdcXHUwMGQ4J10sXG4gICAgICAgIFsnOycsICc6JywgJ1xcdTAwYjYnLCAnXFx1MDBiMCddLFxuICAgICAgICBbJ1xcJycsICdcIicsICdcXHUwMGI0JywgJ1xcdTAwYTgnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsneicsICdaJywgJ1xcdTAwZTYnLCAnXFx1MDBjNiddLFxuICAgICAgICBbJ3gnLCAnWCddLFxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMGE5JywgJ1xcdTAwYTInXSxcbiAgICAgICAgWyd2JywgJ1YnXSxcbiAgICAgICAgWydiJywgJ0InXSxcbiAgICAgICAgWyduJywgJ04nLCAnXFx1MDBmMScsICdcXHUwMGQxJ10sXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwYjUnXSxcbiAgICAgICAgWycsJywgJzwnLCAnXFx1MDBlNycsICdcXHUwMGM3J10sXG4gICAgICAgIFsnLicsICc+J10sXG4gICAgICAgIFsnLycsICc/JywgJ1xcdTAwYmYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWydlbiddXG4gIH0sXG4gICdcXHUwNDBlXFx1MDQzN1xcdTA0MzFcXHUwNDM1XFx1MDQzYVxcdTA0NDdcXHUwNDMwJzoge1xuICAgICduYW1lJzogJ1V6YmVrIEN5cmlsbGljJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUwNDUxJywgJ1xcdTA0MDEnXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ1wiJ10sXG4gICAgICAgIFsnMycsICdcXHUyMTE2J10sXG4gICAgICAgIFsnNCcsICc7J10sXG4gICAgICAgIFsnNScsICclJ10sXG4gICAgICAgIFsnNicsICc6J10sXG4gICAgICAgIFsnNycsICc/J10sXG4gICAgICAgIFsnOCcsICcqJ10sXG4gICAgICAgIFsnOScsICcoJ10sXG4gICAgICAgIFsnMCcsICcpJ10sXG4gICAgICAgIFsnXFx1MDQ5MycsICdcXHUwNDkyJ10sXG4gICAgICAgIFsnXFx1MDRCMycsICdcXHUwNEIyJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJ1xcdTA0MzknLCAnXFx1MDQxOSddLFxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxuICAgICAgICBbJ1xcdTA0NUUnLCAnXFx1MDQwRSddLFxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxuICAgICAgICBbJ1xcXFwnLCAnLyddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcbiAgICAgICAgWydcXHUwNDlCJywgJ1xcdTA0OUEnXSxcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcbiAgICAgICAgWydcXHUwNDREJywgJ1xcdTA0MkQnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXG4gICAgICAgIFsnXFx1MDQ0QycsICdcXHUwNDJDJ10sXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXG4gICAgICAgIFsnXFx1MDQ0RScsICdcXHUwNDJFJ10sXG4gICAgICAgIFsnLicsICcsJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXG4gICAgICBdXG4gICAgXSxcbiAgICAnbGFuZyc6IFsndXonXVxuICB9LFxuICAnXFx1MDVkOVxcdTA1ZDlcXHUwNWI0XFx1MDVkM1xcdTA1ZDlcXHUwNWU5JzogeyAvLyBmcm9tIGh0dHA6Ly93d3cueXYub3JnL3V5aXAvaGVieWlka2JkLnR4dCBodHRwOi8vdXlpcC5vcmcva2V5Ym9hcmRzLmh0bWxcbiAgICAnbmFtZSc6ICdZaWRkaXNoJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWyc7JywgJ34nLCAnXFx1MDVCMCddLFxuICAgICAgICBbJzEnLCAnIScsICdcXHUwNUIxJ10sXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTA1QjInXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDVCMyddLFxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwNUI0J10sXG4gICAgICAgIFsnNScsICclJywgJ1xcdTA1QjUnXSxcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDVCNiddLFxuICAgICAgICBbJzcnLCAnKicsICdcXHUwNUI3J10sXG4gICAgICAgIFsnOCcsICcmJywgJ1xcdTA1QjgnXSxcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MDVDMiddLFxuICAgICAgICBbJzAnLCAnKScsICdcXHUwNUMxJ10sXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTA1QjknXSxcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDVCQyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWycvJywgJ1xcdTIwMUYnLCAnXFx1MjAxRiddLFxuICAgICAgICBbJ1xcJycsICdcXHUyMDFFJywgJ1xcdTIwMUUnXSxcbiAgICAgICAgWydcXHUwNUU3JywgJ2AnLCAnYCddLFxuICAgICAgICBbJ1xcdTA1RTgnLCAnXFx1RkIyRicsICdcXHVGQjJGJ10sXG4gICAgICAgIFsnXFx1MDVEMCcsICdcXHVGQjJFJywgJ1xcdUZCMkUnXSxcbiAgICAgICAgWydcXHUwNUQ4JywgJ1xcdTA1RjAnLCAnXFx1MDVGMCddLFxuICAgICAgICBbJ1xcdTA1RDUnLCAnXFx1RkIzNScsICdcXHVGQjM1J10sXG4gICAgICAgIFsnXFx1MDVERicsICdcXHVGQjRCJywgJ1xcdUZCNEInXSxcbiAgICAgICAgWydcXHUwNUREJywgJ1xcdUZCNEUnLCAnXFx1RkI0RSddLFxuICAgICAgICBbJ1xcdTA1RTQnLCAnXFx1RkI0NCcsICdcXHVGQjQ0J10sXG4gICAgICAgIFsnWycsICd7JywgJ1xcdTA1QkQnXSxcbiAgICAgICAgWyddJywgJ30nLCAnXFx1MDVCRiddLFxuICAgICAgICBbJ1xcXFwnLCAnfCcsICdcXHUwNUJCJ11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTA1RTknLCAnXFx1RkIyQScsICdcXHVGQjJBJ10sXG4gICAgICAgIFsnXFx1MDVEMycsICdcXHVGQjJCJywgJ1xcdUZCMkInXSxcbiAgICAgICAgWydcXHUwNUQyJ10sXG4gICAgICAgIFsnXFx1MDVEQicsICdcXHVGQjNCJywgJ1xcdUZCM0InXSxcbiAgICAgICAgWydcXHUwNUUyJywgJ1xcdTA1RjEnLCAnXFx1MDVGMSddLFxuICAgICAgICBbJ1xcdTA1RDknLCAnXFx1RkIxRCcsICdcXHVGQjFEJ10sXG4gICAgICAgIFsnXFx1MDVENycsICdcXHVGRjFGJywgJ1xcdUZGMUYnXSxcbiAgICAgICAgWydcXHUwNURDJywgJ1xcdTA1RjInLCAnXFx1MDVGMiddLFxuICAgICAgICBbJ1xcdTA1REEnXSxcbiAgICAgICAgWydcXHUwNUUzJywgJzonLCAnXFx1MDVDMyddLFxuICAgICAgICBbJywnLCAnXCInLCAnXFx1MDVDMCddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHUwNUQ2JywgJ1xcdTIyNjAnLCAnXFx1MjI2MCddLFxuICAgICAgICBbJ1xcdTA1RTEnLCAnXFx1RkI0QycsICdcXHVGQjRDJ10sXG4gICAgICAgIFsnXFx1MDVEMScsICdcXHVGQjMxJywgJ1xcdUZCMzEnXSxcbiAgICAgICAgWydcXHUwNUQ0JywgJ1xcdTA1QkUnLCAnXFx1MDVCRSddLFxuICAgICAgICBbJ1xcdTA1RTAnLCAnXFx1MjAxMycsICdcXHUyMDEzJ10sXG4gICAgICAgIFsnXFx1MDVERScsICdcXHUyMDE0JywgJ1xcdTIwMTQnXSxcbiAgICAgICAgWydcXHUwNUU2JywgJ1xcdUZCNEEnLCAnXFx1RkI0QSddLFxuICAgICAgICBbJ1xcdTA1RUEnLCAnPCcsICdcXHUwNUYzJ10sXG4gICAgICAgIFsnXFx1MDVFNScsICc+JywgJ1xcdTA1RjQnXSxcbiAgICAgICAgWycuJywgJz8nLCAnXFx1MjBBQSddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3lpJ11cbiAgfSxcbiAgJ1xcdTA1ZDlcXHUwNWQ5XFx1MDViNFxcdTA1ZDNcXHUwNWQ5XFx1MDVlOSBcXHUwNWRjXFx1MDVlMlxcdTA1ZDFcXHUwNWQ4JzogeyAvLyBmcm9tIGh0dHA6Ly9qaWR5c3oubmV0L1xuICAgICduYW1lJzogJ1lpZGRpc2ggKFlpZGlzaCBMZWJ0KScsXG4gICAgJ2tleXMnOiBbXG4gICAgICBbXG4gICAgICAgIFsnOycsICd+J10sXG4gICAgICAgIFsnMScsICchJywgJ1xcdTA1QjInLCAnXFx1MDVCMiddLFxuICAgICAgICBbJzInLCAnQCcsICdcXHUwNUIzJywgJ1xcdTA1QjMnXSxcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDVCMScsICdcXHUwNUIxJ10sXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTA1QjQnLCAnXFx1MDVCNCddLFxuICAgICAgICBbJzUnLCAnJScsICdcXHUwNUI1JywgJ1xcdTA1QjUnXSxcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDVCNycsICdcXHUwNUI3J10sXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTA1QjgnLCAnXFx1MDVCOCddLFxuICAgICAgICBbJzgnLCAnKicsICdcXHUwNUJCJywgJ1xcdTA1QkInXSxcbiAgICAgICAgWyc5JywgJyknLCAnXFx1MDVCNicsICdcXHUwNUI2J10sXG4gICAgICAgIFsnMCcsICcoJywgJ1xcdTA1QjAnLCAnXFx1MDVCMCddLFxuICAgICAgICBbJy0nLCAnXycsICdcXHUwNUJGJywgJ1xcdTA1QkYnXSxcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDVCOScsICdcXHUwNUI5J10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxuICAgICAgICBbJy8nLCAnJywgJ1xcdTA1RjQnLCAnXFx1MDVGNCddLFxuICAgICAgICBbJ1xcJycsICcnLCAnXFx1MDVGMycsICdcXHUwNUYzJ10sXG4gICAgICAgIFsnXFx1MDVFNycsICcnLCAnXFx1MjBBQyddLFxuICAgICAgICBbJ1xcdTA1RTgnXSxcbiAgICAgICAgWydcXHUwNUQwJywgJycsICdcXHUwNUQwXFx1MDVCNycsICdcXHVGQjJFJ10sXG4gICAgICAgIFsnXFx1MDVEOCcsICcnLCAnXFx1MDVEMFxcdTA1QjgnLCAnXFx1RkIyRiddLFxuICAgICAgICBbJ1xcdTA1RDUnLCAnXFx1MDVENVxcdTA1QjknLCAnXFx1MDVENVxcdTA1QkMnLCAnXFx1RkIzNSddLFxuICAgICAgICBbJ1xcdTA1REYnLCAnJywgJ1xcdTA1RDVcXHUwNUQ1JywgJ1xcdTA1RjAnXSxcbiAgICAgICAgWydcXHUwNUREJywgJycsICdcXHUwNUJDJ10sXG4gICAgICAgIFsnXFx1MDVFNCcsICcnLCAnXFx1MDVFNFxcdTA1QkMnLCAnXFx1RkI0NCddLFxuICAgICAgICBbJ10nLCAnfScsICdcXHUyMDFFJywgJ1xcdTIwMUQnXSxcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MjAxQScsICdcXHUyMDE5J10sXG4gICAgICAgIFsnXFxcXCcsICd8JywgJ1xcdTA1QkUnLCAnXFx1MDVCRSddXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcbiAgICAgICAgWydcXHUwNUU5JywgJ1xcdTA1RTlcXHUwNUMxJywgJ1xcdTA1RTlcXHUwNUMyJywgJ1xcdUZCMkInXSxcbiAgICAgICAgWydcXHUwNUQzJywgJycsICdcXHUyMEFBJ10sXG4gICAgICAgIFsnXFx1MDVEMicsICdcXHUyMDFFJ10sXG4gICAgICAgIFsnXFx1MDVEQicsICcnLCAnXFx1MDVEQlxcdTA1QkMnLCAnXFx1RkIzQiddLFxuICAgICAgICBbJ1xcdTA1RTInLCAnJywgJycsICdcXHVGQjIwJ10sXG4gICAgICAgIFsnXFx1MDVEOScsICcnLCAnXFx1MDVEOVxcdTA1QjQnLCAnXFx1RkIxRCddLFxuICAgICAgICBbJ1xcdTA1RDcnLCAnJywgJ1xcdTA1RjJcXHUwNUI3JywgJ1xcdUZCMUYnXSxcbiAgICAgICAgWydcXHUwNURDJywgJ1xcdTA1RENcXHUwNUI5JywgJ1xcdTA1RDVcXHUwNUQ5JywgJ1xcdTA1RjEnXSxcbiAgICAgICAgWydcXHUwNURBJywgJycsICcnLCAnXFx1MDVGMiddLFxuICAgICAgICBbJ1xcdTA1RTMnLCAnOicsICdcXHUwNUU0XFx1MDVCRicsICdcXHVGQjRFJ10sXG4gICAgICAgIFsnLCcsICdcIicsICc7JywgJ1xcdTA1QjInXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXG4gICAgICAgIFsnXFx1MDVENicsICcnLCAnXFx1MjAxMycsICdcXHUyMDEzJ10sXG4gICAgICAgIFsnXFx1MDVFMScsICcnLCAnXFx1MjAxNCcsICdcXHUyMDE0J10sXG4gICAgICAgIFsnXFx1MDVEMScsICdcXHUwNURDXFx1MDVCOScsICdcXHUwNUQxXFx1MDVCRicsICdcXHVGQjRDJ10sXG4gICAgICAgIFsnXFx1MDVENCcsICcnLCAnXFx1MjAxRCcsICdcXHUyMDFDJ10sXG4gICAgICAgIFsnXFx1MDVFMCcsICcnLCAnXFx1MDU5QycsICdcXHUwNTlFJ10sXG4gICAgICAgIFsnXFx1MDVERScsICcnLCAnXFx1MjAxOScsICdcXHUyMDE4J10sXG4gICAgICAgIFsnXFx1MDVFNicsICcnLCAnXFx1MDVFOVxcdTA1QzEnLCAnXFx1RkIyQSddLFxuICAgICAgICBbJ1xcdTA1RUEnLCAnPicsICdcXHUwNUVBXFx1MDVCQycsICdcXHVGQjRBJ10sXG4gICAgICAgIFsnXFx1MDVFNScsICc8J10sXG4gICAgICAgIFsnLicsICc/JywgJ1xcdTIwMjYnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWyd5aSddXG4gIH0sXG4gICdcXHU0ZTJkXFx1NjU4N1xcdTZjZThcXHU5N2YzXFx1N2IyNlxcdTUzZjcnOiB7XG4gICAgJ25hbWUnOiAnQ2hpbmVzZSBCb3BvbW9mbyBJTUUnLFxuICAgICdrZXlzJzogW1xuICAgICAgW1xuICAgICAgICBbJ1xcdTIwQUMnLCAnfiddLFxuICAgICAgICBbJ1xcdTMxMDUnLCAnISddLFxuICAgICAgICBbJ1xcdTMxMDknLCAnQCddLFxuICAgICAgICBbJ1xcdTAyQzcnLCAnIyddLFxuICAgICAgICBbJ1xcdTAyQ0InLCAnJCddLFxuICAgICAgICBbJ1xcdTMxMTMnLCAnJSddLFxuICAgICAgICBbJ1xcdTAyQ0EnLCAnXiddLFxuICAgICAgICBbJ1xcdTAyRDknLCAnJiddLFxuICAgICAgICBbJ1xcdTMxMUEnLCAnKiddLFxuICAgICAgICBbJ1xcdTMxMUUnLCAnKSddLFxuICAgICAgICBbJ1xcdTMxMjInLCAnKCddLFxuICAgICAgICBbJ1xcdTMxMjYnLCAnXyddLFxuICAgICAgICBbJz0nLCAnKyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcbiAgICAgICAgWydcXHUzMTA2JywgJ3EnXSxcbiAgICAgICAgWydcXHUzMTBBJywgJ3cnXSxcbiAgICAgICAgWydcXHUzMTBEJywgJ2UnXSxcbiAgICAgICAgWydcXHUzMTEwJywgJ3InXSxcbiAgICAgICAgWydcXHUzMTE0JywgJ3QnXSxcbiAgICAgICAgWydcXHUzMTE3JywgJ3knXSxcbiAgICAgICAgWydcXHUzMTI3JywgJ3UnXSxcbiAgICAgICAgWydcXHUzMTFCJywgJ2knXSxcbiAgICAgICAgWydcXHUzMTFGJywgJ28nXSxcbiAgICAgICAgWydcXHUzMTIzJywgJ3AnXSxcbiAgICAgICAgWydbJywgJ3snXSxcbiAgICAgICAgWyddJywgJ30nXSxcbiAgICAgICAgWydcXFxcJywgJ3wnXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXG4gICAgICAgIFsnXFx1MzEwNycsICdhJ10sXG4gICAgICAgIFsnXFx1MzEwQicsICdzJ10sXG4gICAgICAgIFsnXFx1MzEwRScsICdkJ10sXG4gICAgICAgIFsnXFx1MzExMScsICdmJ10sXG4gICAgICAgIFsnXFx1MzExNScsICdnJ10sXG4gICAgICAgIFsnXFx1MzExOCcsICdoJ10sXG4gICAgICAgIFsnXFx1MzEyOCcsICdqJ10sXG4gICAgICAgIFsnXFx1MzExQycsICdrJ10sXG4gICAgICAgIFsnXFx1MzEyMCcsICdsJ10sXG4gICAgICAgIFsnXFx1MzEyNCcsICc6J10sXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxuICAgICAgICBbJ1xcdTMxMDgnLCAneiddLFxuICAgICAgICBbJ1xcdTMxMEMnLCAneCddLFxuICAgICAgICBbJ1xcdTMxMEYnLCAnYyddLFxuICAgICAgICBbJ1xcdTMxMTInLCAndiddLFxuICAgICAgICBbJ1xcdTMxMTYnLCAnYiddLFxuICAgICAgICBbJ1xcdTMxMTknLCAnbiddLFxuICAgICAgICBbJ1xcdTMxMjknLCAnbSddLFxuICAgICAgICBbJ1xcdTMxMUQnLCAnPCddLFxuICAgICAgICBbJ1xcdTMxMjEnLCAnPiddLFxuICAgICAgICBbJ1xcdTMxMjUnLCAnPyddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxuICAgICAgXVxuICAgIF0sXG4gICAgJ2xhbmcnOiBbJ3poLUJPUE8nXVxuICB9LFxuICAnXFx1NGUyZFxcdTY1ODdcXHU0ZWQzXFx1OTg4OVxcdThmOTNcXHU1MTY1XFx1NmNkNSc6IHtcbiAgICAnbmFtZSc6ICdDaGluZXNlIENhbmdqaWUgSU1FJyxcbiAgICAna2V5cyc6IFtcbiAgICAgIFtcbiAgICAgICAgWydcXHUyMEFDJywgJ34nXSxcbiAgICAgICAgWycxJywgJyEnXSxcbiAgICAgICAgWycyJywgJ0AnXSxcbiAgICAgICAgWyczJywgJyMnXSxcbiAgICAgICAgWyc0JywgJyQnXSxcbiAgICAgICAgWyc1JywgJyUnXSxcbiAgICAgICAgWyc2JywgJ14nXSxcbiAgICAgICAgWyc3JywgJyYnXSxcbiAgICAgICAgWyc4JywgJyonXSxcbiAgICAgICAgWyc5JywgJyknXSxcbiAgICAgICAgWycwJywgJygnXSxcbiAgICAgICAgWyctJywgJ18nXSxcbiAgICAgICAgWyc9JywgJysnXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXG4gICAgICAgIFsnXFx1NjI0QicsICdxJ10sXG4gICAgICAgIFsnXFx1NzUzMCcsICd3J10sXG4gICAgICAgIFsnXFx1NkMzNCcsICdlJ10sXG4gICAgICAgIFsnXFx1NTNFMycsICdyJ10sXG4gICAgICAgIFsnXFx1NUVGRicsICd0J10sXG4gICAgICAgIFsnXFx1NTM1QycsICd5J10sXG4gICAgICAgIFsnXFx1NUM3MScsICd1J10sXG4gICAgICAgIFsnXFx1NjIwOCcsICdpJ10sXG4gICAgICAgIFsnXFx1NEVCQScsICdvJ10sXG4gICAgICAgIFsnXFx1NUZDMycsICdwJ10sXG4gICAgICAgIFsnWycsICd7J10sXG4gICAgICAgIFsnXScsICd9J10sXG4gICAgICAgIFsnXFxcXCcsICd8J11cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxuICAgICAgICBbJ1xcdTY1RTUnLCAnYSddLFxuICAgICAgICBbJ1xcdTVDMzgnLCAncyddLFxuICAgICAgICBbJ1xcdTY3MjgnLCAnZCddLFxuICAgICAgICBbJ1xcdTcwNkInLCAnZiddLFxuICAgICAgICBbJ1xcdTU3MUYnLCAnZyddLFxuICAgICAgICBbJ1xcdTdBRjknLCAnaCddLFxuICAgICAgICBbJ1xcdTUzNDEnLCAnaiddLFxuICAgICAgICBbJ1xcdTU5MjcnLCAnayddLFxuICAgICAgICBbJ1xcdTRFMkQnLCAnbCddLFxuICAgICAgICBbJzsnLCAnOiddLFxuICAgICAgICBbJ1xcJycsICdcIiddLFxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcbiAgICAgICAgWydcXHVGRjNBJywgJ3onXSxcbiAgICAgICAgWydcXHU5NkUzJywgJ3gnXSxcbiAgICAgICAgWydcXHU5MUQxJywgJ2MnXSxcbiAgICAgICAgWydcXHU1OTczJywgJ3YnXSxcbiAgICAgICAgWydcXHU2NzA4JywgJ2InXSxcbiAgICAgICAgWydcXHU1RjEzJywgJ24nXSxcbiAgICAgICAgWydcXHU0RTAwJywgJ20nXSxcbiAgICAgICAgWycsJywgJzwnXSxcbiAgICAgICAgWycuJywgJz4nXSxcbiAgICAgICAgWycvJywgJz8nXSxcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cbiAgICAgIF1cbiAgICBdLFxuICAgICdsYW5nJzogWyd6aCddXG4gIH1cbn07XG5cbi8vIGFsaWFzZXNcbmtleWJvYXJkTGF5b3V0c1snSHJ2YXRza2knXSA9IHtcbiAgJ25hbWUnOiAnQ3JvYXRpYW4nLFxuICAna2V5cyc6IGtleWJvYXJkTGF5b3V0c1snQm9zYW5za2knXS5rZXlzLnNsaWNlKDApLFxuICAnbGFuZyc6IFsnaHInXVxufTtcblxua2V5Ym9hcmRMYXlvdXRzWydTbG92ZW5cXHUwMTYxXFx1MDEwZGluYSddID0ge1xuICAnbmFtZSc6ICdTbG92ZW5pYW4nLFxuICAna2V5cyc6IGtleWJvYXJkTGF5b3V0c1snQm9zYW5za2knXS5rZXlzLnNsaWNlKDApLFxuICAnbGFuZyc6IFsnc2wnXVxufTtcblxua2V5Ym9hcmRMYXlvdXRzWydTcnBza2knXSA9IHtcbiAgJ25hbWUnOiAnU2VyYmlhbiBMYXRpbicsXG4gICdrZXlzJzoga2V5Ym9hcmRMYXlvdXRzWydCb3NhbnNraSddLmtleXMuc2xpY2UoMCksXG4gICdsYW5nJzogWydzciddXG59O1xuXG5leHBvcnQgeyBrZXlib2FyZExheW91dHMsIE1BVF9LRVlCT0FSRF9MQVlPVVRTIH07XG4iXX0=