# Belajar Node JS

Pakai morgan sebagai middleware nya dan ditaruh di app.use sebelum ekseksui app.get

Hasil dari morgan bisa di cek di console.log nya biasa di console.log nya si VScode nya langsung.

Contoh :

```
app.use((req,res,next) => {
    res.send('hello middleware')
    next()
})
```

* Perhatikan bagian next() nya di dalam parameter nya.

Urutan dari statement sebelum next dan sesudah next juga berpengaruh dalam urutan pemanggilan nanti.