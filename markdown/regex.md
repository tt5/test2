
# regex

## regexp

*(* atom quantifier$^?$ *)* ²s¹  
*(* ²q¹ **`|`** *(* atom quantifier$^?$ *)* ²s¹ ²q¹ *)* ²s¹

## atom

░░ ²q¹ **`(`** regexp **`)`**  
░░ ²q¹ *any character exept* ²q¹ `. \ ? ²s¹ + { } ( ) | [ ]`  
░░ ²q¹ **`.`** ²q¹ (*this means* `[^\n\r]`)  
░░ ²q¹ **`\`** *one of* ²q¹ `n r t . \ ? ²s¹ + { } ( ) | [ ] _ ^`  
░░ ²q¹ **`\P`** *or* **`\p`** **`{`** more1 **`}`**  
░░ ²q¹ **`\`** *one of* ²q¹ `s S i I c C d D w W a A`  
░░ ²q¹ charClassExpr  

### more1
`L` *opt one of* ²q¹ `u l t m o`  
`M` *opt one of* ²q¹ `n c l`  
`N` *opt one of* ²q¹ `d l o`  
`P` *opt one of* ²q¹ `c d s e i f o`  
`Z` *opt one of* ²q¹ `s l p`  
`S` *opt one of* ²q¹ `m c k o`  
`C` *opt one of* ²q¹ `c f o n`  
`Is` normalized-block-name (*e.g.* `Latin-1Supplement`)  

## charClassExpr

`[` `^`$^?$ charGroupPart$^+$ character-class-substr$^?$ `]`

### character-class-substr
`[` `-` charClassExpr `]`

### something
every character exept `\ [ ]`  
`\` one of *[* `n r t . \ ? ²s¹ + { } ( ) | [ ] _ ^` *]*

### charGroupPart
something  
something `-` something  
`\P` *or* `\p {` more1 `}`  
`\` one of ²q¹ [ `s S i I c C d D w W a A` ]  

