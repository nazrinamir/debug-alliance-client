# Sistem Reka Bentuk Atomik

Projek kami menggunakan metodologi Reka Bentuk Atomik untuk membina dan menyusun komponen UI. Pendekatan ini membantu mewujudkan perpustakaan komponen yang boleh diskalakan dan mudah diselenggara. Berikut adalah gambaran keseluruhan tentang bagaimana kami menyusun komponen kami:

### Atom
Atom adalah blok binaan asas aplikasi kami. Mereka adalah komponen yang paling kecil dan boleh digunakan semula, seperti butang, input, dan label.

**Contoh:**

```jsx
// src/components/atoms/Button.js
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
