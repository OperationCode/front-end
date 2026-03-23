const tabKeyCode = { key: 'Tab', keycode: 9 };

export const KEY_CODES = {
  ENTER: { key: 'Enter', keyCode: 13 },
  BACKSPACE: { key: 'Backspace', keyCode: 8 },
  TAB: tabKeyCode,
  TAB_AND_SHIFT: { ...tabKeyCode, shiftKey: true },
  DOWN_ARROW: { key: 'ArrowDown', keyCode: 40 },
};
