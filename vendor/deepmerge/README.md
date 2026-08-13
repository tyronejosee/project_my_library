# deepmerge 4.3.2 (parche local)

Copia de `deepmerge@4.3.1` (MIT) con el parche de CVE-2026-93753 /
GHSA-gcqx-w48m-w2h4.

Upstream no publicó una versión corregida. `getKeys()` ahora descarta las
claves `__proto__`, `constructor` y `prototype`, así que un `source`
malicioso no puede escribir en el prototipo del objeto devuelto.

La versión se sube a `4.3.2` para que `pnpm audit` no marque el rango
vulnerable. `package.json` la enlaza con el override:

```json
"deepmerge": "file:vendor/deepmerge"
```

Al actualizar `@heroui/theme` conviene revisar si ya dejó de usar
`deepmerge`; en ese caso se puede borrar este directorio y el override.
