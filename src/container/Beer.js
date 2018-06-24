import React, { Component } from 'react';
import MaltCard from '../ui/MaltCard';
import HopCard from '../ui/HopCard';
import YeastCard from '../ui/YeastCard';
import AdditionalIngredientCard from '../ui/AdditionalIngredientCard';
import TextCard from '../ui/TextCard';

class Beer extends Component {

    textCard = {
        title: 'Monte sua cerveja!',
        text: 'Aqui você mesmo monta sua cerveja favorita escolhendo a quantidade desejada de cada ingrediente preferido!'
    }

    malte = {
        title: 'Malte',
        text: 'A composição do malte é responsável pela cor e pelo paladar da bebida, influenciando também na espuma e no corpo da cerveja.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXkm3NpVtToyuEhUIy9FpdPZDmBb142mTzLbr0un384i7JKWUtA'
    }

    lupulo = {
        title: 'Lúpulo',
        text: 'O lúpulo exerce papel essencial por conferir o amargor e o aroma a muitas cervejas.',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFhUXFRUYFRcYFxcXFhcVFhUYFxYYGBcYHiggGBonHRUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABHEAABAwEGAgcEBwUGBQUAAAABAAIRAwQFEiExQVFhBhMiMnGBkaGxwdEHFCNCUoLwM2JykuEVRFOisvEWQ3ODwiSTs9Li/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgEEAgIDAAAAAAAAAAECEQMhEjETBCJBUTJhFIFCUnH/2gAMAwEAAhEDEQA/AKpTTqmE0pp1SXlsyHDAlQERiVaoGcwpVjZVhuTohVrhr3Hq2OEgkS4jjG08yrpdFwWSk0Foa/CSA9wae1vh2nadohUjWGNvbM7s1z1392jUPPCQPU5KWsvQ+1O1a1v8Tx8JWj1XwO8AI1J2+ATa23hSosl7sM5Nkw5x5Dj+skUaeNFTsvQx0kVK7BESGguPwSda56DXlodWeGgl7wGMY2NZLjM8gCmF5Wt1R9SpV65lANdhJqCnMTLg2QM9nRG+apN7fSLZRIoWeqS0Qwmr2CdiWxDhOebc1Sg5dIvhBdlyZbbOIALS37zg1uWf43g7cvRJVOk9FpAbaLMxu5bQLqkznw9Z8lj16dKLRaHYqlTyaA1voNfNMBaidVp/Gl8lrJBdI26p0rovgdcyrxLqbW9nxhxnKNk4oXnYqsM7DD+LFGe2enqFh7LQdil6Vp5DwIUPDJfJXOD7RuVS6G4C9tVuRzDpA5Q8dn1hMnU4MEQs4uvpBWouD6Ty0gAESS1wGzmk5+KvVn6YUarGivTwuyJcxozboTI1A4ZEc95trsl4Iy/EdObwStmOyUtFnDYc1wcw5hw3H6/WybuMK7TRz04vY9hIVXyU3NU8UkKiuCoHKx3gRmkJuK0apRtYLYQ7a4ICpmm4qSlGhIB41HYU1ZUTimQpAeNclcQTVtRGDkrEOesR2uTdpSgKQxYFDEiAoSlYw7iiOK4XIpKLGBxSTijlJ1EWARyTRyiEIsAIIqCLAytie0UyplO6Sxkc47YrhcfR1vV9dWBOUhnAc+JPDbdMujF20462rqSOrEAwJzeQdTwBy3U9Wt4rVA0SKbM2AZ4njuuPGM4mc4WTZ24MH+UkTP1k1GtxdhgyJBgZatDuGUE+KNXBDw5xGAQ1jG7TqSPXyHNQdSrVrPAH7MZx92RoPUE56xCcWmGNa6pVEkxkdHEdp07xkB4Eos6+NEhbr1ZEBwmZJ+6A2TJ5CPUeE0W9b0p0DVtNWrjcO6B9pULT3MTn5MxZOwAeOQgKX7a6VmoutZY6oKjm9TTzwEDC1hcT3gYxxp2jkVml626tan46znZmSAIbO0DbKB5LSKvvowySUdfIh0g6XWm1F4dULWOyLGxEcCYk/rJV1zFIWm7HB2JoJG+WaWszG6ldqyRS9py22Q1RhGohFa0nRSFodjdA0Tix0ANBKp5KWySMbISzakqQtNCAVDByItTGmP6VYjdStgtpH6jzB2KgWulOKNRZzx2jaE6ZonRfpSaIdQqud1Ts51LcwSY0Ph6RqrjeVlDHdlwc0gOa4aOa4SCP1ssgoVZg7ZTxHMLRuhN4irSbZ3nNgcGZdqBBbhzzA7WXBy5GuJrOPkX7HbwitCVqtTeo5bxZyAeUZjkgxyVa1aWA4YU4ouTOmE5aUmwF2pZjk3CVYobEOWOS7XJsxLtCnkAuxyOCkmBKgJchijUaEUBKNS5FBCEVKlEKVgESbkoURyOQCTkQo7kQhHIQRBGQTsDKKQUjYKBe9rBqTH9UyYxT/R6yEk1Nm5DxiYHs9VnNkY4cppFkfWpU2AZEsbJg/dEho03cTp+FI07xDGNA7zyQXDsgNzJDRtABGZPxTJ93GrVLGmABTxHhBOU6ZAuPogCwuI0FMOicz2pAn8ufnCzZ7BKfX6j8LG9kYToOAAA8dUledrpudTs4AcQQ18gHswHFpP4YAnxXLvtbcBE5gGNMms7RjmTCg7U77K11GHC5sU2kjWKbA7PYYiSTrknGJEnRXOl3Sp9qeKbiAxjuy1ugGgJ4uIM8shxTWzNYYzVZLQRmYcJ0Pgl7K9zgYMLoniVaPNlJydlsNMO3EDdVm3UvtHBsDeeZ4J9SswLZdPLx2Vhui7esgPALeB+eyxjLxsnopNKyEagnmntBgBnkFbq3RYtdDnYgc2luTgOYOuvmq1brqeys6mTpEcwQCD7Vp5ebabFZFXlaAAQ3UqGwEbK6U7sDR2oA4wm31GJd93gdf6LaGZRVDsqzSlGlSNtpCYjwUaRC3jLkh2Sljfp6FTV2Ww0qtJwJ7LgY4icx45qu2R3w9VKt+6fPLI84PHdc2SOzqxs1arX6ynTqzOJoBd+LDkHeJAz5gpoWpHog/rLJUgyWVBIy7paX4j4HH704cFnB0ZZY1LQjCO2UbAjMateRmdYnFNqTaxOaTVDkSxVoSrGojQl2BZuQjtNqcMCIwJZgUOYBmhKNC41qVaFPIpAaEYLoC7CORQUohShRCjkAmURwSpCIQnYCRCIQliEQhOxCUII8IJ2Iy+m1S9mvA02hreZP8RJAPsCY02Jd1EFhMiQJ88TQPLveqlu2bekXvf8AwVsN4vLYk90+/wD3TWyWjFUI3L48oB+SJQMNMkAYTPHQfEkroptYcQdmagnwJaY9AAg9AlbPTIZixAHgTEiZdntkPekqlnZUsNUl/aBaMgYcXuxPJHHM58lyzObVGAiSS8zvMAAe32JpeFbqrHSYPvw4u/ewS7/5EGObUGUW12QAuaM43TGyVg0wfJObVUPWuGo/olqN3tcJgeC7LqPuPNJWxWtr24fUqZuy9epIa4gtOhVSFiqtzpte4cgSrjdHQO3V6TXkMZiIhjyQ4D8ToBw+Gq5p412noCyNvFjqbng5tBcCRwEx4H4qu32RWYbUDBAHvzHvI8+K0fo90Fo0KcVoqvIhxcSW+DWaR4yU5odBbIKpqOptIiMGlOZPawDKdvJYxg0x6MWs1cVXBrnADirA3o+akQSW+GvmtSqdErvcC0WWi395jGtc3mHAaqNvK5Pq1N1Sk8va3vB0SANSCBnHgFU5P4JTM9p9EqbqgBaSMw6DvtHPVQXSfoI+iHVKBdVaJc5mHttaN8u8B6rQLrvmk15DtySDxnP1UyLzBOIkYdJy0PBZw9TOHuT/AKLSXweebM7OOKk6dUQBwIP69ilPpEuanZbSTSA6ut9pT17MwXiJ0k5ciq00567r03U1yRrGVGkfR/VP1nqmmBVw4hsAxrpIG8wARwKsVWmQSDqCQfEGFSugFpdTtFOsZhpcwHm4Bvx96vQaSAXd4ta4+Lmgn2lcz0zWe0mIBqUaEpgQwoswaOMSzAuMYlmNWcpGbFKbUu0IjAlmhZuRIdgSrUm1KtUOQrFWo4SbSjgpch2HXUSV0lFlWAopXVxOx2cKIUcrhT5BYREIShRSnyCxOFxKQgjkIzumxM7S3N44/GCPaCpNjFG3o/A+f3WEeDXSfeU4u2dHptTGNFxwv4EQD4mB7kajVBgTqAR4jUerSj0LQAHNA39c5+MpvZKoho3aXA+e60dHfslqB6ok8IdxIn5ZFRnSGvUqWaiymMR61xjKYLdfaE4stYh4edG9/eADBy8D7EpbLABQqNaS11Kq0CNeryy55Fp8k4unZlmVwaIa5OiVRzg+tJaTmAQBnxOqtxuimxuCnTzOQ7X9UhdV8imMMg5bhSVivJryS3XkJAHHgFz5Mk5u2zzRGztfTIp4M5AkZiSMgCfAqz2G8erye4EjXeTwVatl+NpugOxCBMEHPyy9F03lRq04eQ0x3mYQfD/cLF6ZLLrZL+BlxIj9aDdEtPSJpLWtBMuAjd3IBZzaL+Y1uCm0gDc6+1WjoVThhtb83mRSB2AykDmfcm3P5J7L6wDD2+9+GeyOXNOKlGnUaWmCCCCIBEEcCq3TtJqHvQB3iePLin1K1FhgmRGR0n+quOS+yzNr16F2mlUe6nNRod2G6PwzrEBp30UdX68M7dGoyDqZ1B0Maea1i9r1DKeN2cFoAGubgFG3nXo1sOIROROm3BJtdlRbMRt7jbXwS8Gn2cWRYBi3aTLc902vq6mUSMDnEEfeABluRORORyIGomDmFpXSborZnMksaXASKkAF07Oj38lVn9Ga0Oa5rntkGW9p2WUgcRGY4Ltx+pi6XX6Nk+W2M+hNPFaMGcOEjPdsOnygrScJyB1AAPkIVV6E3eW2vEzNtJrw4nLN3ZAjjkrk4SSeJJ9UpyTdmktRobhqOGpXCjBizcjFhGsSrWroalGhZuRmzrQlAuAIwCzbM2GCUCIAjhTYhRpRgUQIyVhYeUJRQUEWOw0ri4gnY7OriCCLHZwhchGQhPkAWFxHhBHIChtamN/Ufsg6M2uHo7snyzHop5lkGzguusbSC0kEEQRxByKtWnZ0xTi7M9cHNcDlHwjL4jySjGQczvB5gkEeyfVK3zZOqqOpySBm08j/AFUe20SJnTL25eYK6u1aO5bJC76gAwbkFrp3IMz7vVP7PQe9hptMueyBxDmDSebYg8lCUqk9qDlmctt/NS9htbgMQ71N2JwGctHeI8Jd5FS7smXRT6V8ZQ4wd5G6k/7ZYWBmLIDuzAnjG55qP6aXcGWkupg4KoxjhiP7QA7iTP5lFssRMZiSut4cckpdHmSVOibpVDUdDDJ9g80/fZqjoBeAQRwHLUpG73Mpta0QInEdzl80tRsrq7hAOCdVyyaT/SIaHN12E1q4pFwiJLhy24Srw22hgDBkA0Bo4NAgKn2Gh9XriHAN0Jzgb7A55Il73kfrEMPZgZ/rxXLli8rqPRSRfbPbt5Tm1W+S1oIgAk8/1CpFnvAHC0GToBqSfBXW5LmyD7TTc4x905NHDiVgoS6BkLe15vrEdW1xbTdJIDj2swdOGicOdaAyXMeG5S4jEBzOeQ5q42e3UmNAY1pa3JsCCG7AgaFQN53y0FxLDm4QWj1kK3GKrYkrZE2y8A2m2nhnKHZ77wTnwOu6Vsd4VRBoxLiBhGZJjTDw5kxkm7bXTyf1IwQ0FrjMHEGgicmgEnnCmn3RhdTtNCmBhBFSDq0jJ2HTI7jjumlWzeXtVjr6iWnFVPUkgYnOAwOjSXNJA2EnhCTaARIII4jQqRtVvcKYLoiYdvE+OyNY7rY2hLSS0AFg1Ib94Tvnn5nwVJ74olTtbI4MRg1TFC5XOE93x19iStV2upjERlxGn9E3YmRwajhq65wGgJ8IXRUHA+z5pcJC4SOgLoCNIXHPA29oS8cifHI6AjAICqyJJRDbKX4j6H5JeOQvFIVC6m/12n+9/K75Iz7XTH3j/K75I8Ug8UhcLqbstjCYn/K4fBHfaGh7aZJDnd3skj1iAjxSH4pCqCctspQ+qniE/FIPHIbLsJY2c8lwUHcB6p+KQ/GxKF2Es2zOOwRvqzhsE/FIrxsQhBLdQ/gEEeGQ/GxkbK2CBQI8j8Ak7PYHAnEzFO2EiFPNoVPxexBtN/4iuzijr5FJ6WdGPrLWupscyoyYy7Lwfuu3HisqtNB9F7mPaQQcL2nUFej3S0EmYA5rP+mt0Uq9VtopvwVRhxhzTgqBp7Mkd0iNc0nOMdNgsqXYw6I9FrL1Iq2wvJdBDWktDGHLtRmTuVZbf0dstFuKk1unZMCRt3tT5qLuia5LWuAZEPJ0jeOJVoumtSojAXFzm5AvydG0cAuB5ZT7OOc5Sd2ZFfNx16z3UG0arhkaJbTdAMxmYgDMA8gCn9w/RVaXNLrSRQOWEZVHebWmP8y1KveLi4YDHEkkiPP4JtbLfTmcy/iOz7N10fyJKPFCc77KfafozsrG9t9scYzcxtOPENLTl5qasPRmytpMa0vc1ugcA056zB1zUh9Zc4dp4p8Q6CfSJ9VHVQKWdN7sMd50CTyGsLGWWcu9k2QHS3o3U7TqOFwmS1uRAAyyIz30WeVrY+OrPh+vmtlu4G0ObBBc0zILgRsZM6cpSN7fR7Zq1qFes9zWgfaNGFoe4aZ6jLXjktcMv9kF6M+6MO6lweQJOWI7Dg35q90r7fUaWB2EHIuMAAbxqSY5qxUbksRmm2xUcIA7Ra0uP5j2h4zKe0Oro5U2U6bd8AaD7FMtu7I+SrsstJuBvWuc533WhpeBu7PJjRxPhmYRrf0QsxIqYqhc2SDIM+WH4qZvmoyrOHFiZo4az+E5Zg55JrTqDHhk6DIAk854LPSdIu4sqVqumvTcWvp4qb24abmkS7IkdjUaT5J/0bvcMGFxdpBaduMg+5Tl43NUqOY9rR2SSJOEThIEA/xFNLJdmGr19emZbo3UGNHGNYz/AEFM7VIblqh9SuerUzyYx33TJJbr3fbnCs92tpYS1gJwnCSQcyOeh8lXxeL6jyJmdMMxGw9im7FTe0bDkTp6K8Uk5aFocuqGnqJBORSNe0hxiezGYIBBnIgo1rAqDCXEFufZOmW/qqLfF6PFR+A4sLyDGZBnT9cFWd8VoE6LPa7FSHaaxsZSNYPLkmxsrXGQwRymfYmV2XlJcDJ7pz8p8t1NWK8KTuyAQ7xELTD6iLVSNo5aWxk672HMMd5td8l1lgIGTcuGDP2hS5xGcBaeRmR7cwitfV/C2fNdKcZdGscifRHsshOrHj8gXK4cxoihUeZzAaBlxzhSf1l7dgeQ/qUtSthP3Y8x81SSQ22Q7aztPqtb+VvzzTim15P7F48QBPtT6tbnDu0nO8Ij2pNl41NDSw+JCdxJ9wlTpOn9mR5BGJeJ+zJS1S8CIktE8Q75JxTtgO4PgDHuS0NuX0R5dVOlL1hFeyttSb6hS7a36APyXRaPHzBRSFyf0Qb21xpRb6hdFOuR+xb6wp3reJRhVHH2J0heR/RWgKzf7uPJyc0m1CM6bR4lTjqreKSNcc/RFIfNv4Ivq3D/AJQ8iuKUNoH73ogjQW/orL7Sx33x6ke8pmbaaMF1QmmToAC4jm7x4DzVOf0fvKZFuA5AP/8AJxRa1orWcCnVIfkO2N+OW2fBc3qE+OmGXrRdLzvWlWpFofgBGRLnl38sT6qqWmz1qjhRYXYo3BOXGM4J4a5qu1r2cJcx4BGk6gq5dBrQGUjXtBdjeew0GCW7OO+e3LPdcbhe2cbR2tQrWWgwhnYpntHLU6uEHc7qKt/SJroxNg7ET71L17fQY0ue92IEwx/ajlGk8zKoV421tV7yAGtJyAEDyCcfcX2WL/iE4QzOBpGvimz+keeumh580n0d6MG1Ow9dhjCXdknsuE5GYnRXN30dWTuYahMZ1MZyO2WnsWixWQ0yoDpHvOfr6KUuWuK7jUeZaDEHQnny0SN7/RlhBfQrZgHsuznwI0Te7rxDKTaeQhoB+KmcFHaBFvF806IIpMa0T2nACSfJQ9s6TlziMtonbnCZUbNTqCeucDwwjCPao+yVtdCAczAIjQGVm+T7Yies15OIzJRK97fdmJ1PJQ1apMlh/Lz8FC1bY4SHDM8I9ifBtUJstdp6QMYA1hJMxnuSp+x3n1Uh4JeBiMaER2Y4jTNYxa7xc2uydA4E+RGS0m7LfTeycjIjPWNh7UZcUsaUvscUWRt7VXknPIDQ7HPLxkJ1ZrbmGuOse1MLLXpBglwaQ0T5CMydVDUnVXPJ7USe0YiNjPgud2t3Y2Sl7uLHhlNzwW4SAwHnMAQQZnPNObHb6uhJE7bzz4KuutxdXNVrsgABByy1P+6khf4J+0YC8feymPitKV7dDbLhYKFJpNUtioQA55Ik+2VDX1Y6NUPFIU6dQmcQA7R/eGjp5qNbf7HgjIg6zn/sj16jHtL8QpgDN2KT+UcdlpLKnUUHZWrvtlejVc2s4YxLGMA2BJOegy08tFZ7LY8YZSpDA7N2PV7o1EkidZyyVBvd5q2rsd9wGPXJpjB7NfELV7ptr24WEB0AaaxESBtkr4xffyHJdAstQsdhLnFzYlrhGvDiEvaL0p/edhjlnwznTzSdsdRqvkktfAjUd08OUrJb0tNY1qlKSaoc5sDESSwkDTzKqDlF+0cPy0avVvaix4YXPxHXsjKdJ4Sn1KpTInGCY1MBZO21VKrOubUl0DMiAROQ5OzU7d9vwgAkY95mQOOeSmebJbNm23SNFslYFs4gfAzCK2003OIiSDs0n3Ks2e2GoQwODGxGoBJ+KnqFtZRHdE6GSJRD1Ul+XQuTWmOn2+i3Ikg82lBt40jo74JZ1UvZJwkHYCdeMqodKLFWAiyYesnOnUL8xuWu0y810L1CbouEovTLX/aNEffHqi/2tR/xFm5uy9vw044B3zSbrFew/wCW0jm8fAZre2beOP2aWy8qJ0M+nxRH31QBguj0PuWeWWy2t8HCSYz7boHEaI1e7rYO7RJnn83Itj8cTQDflm3qD0PyXW3zZiJDxG8BZv8AULwP91Hm9o/8k3fd1uE/+kb51R8EWw8Ufs07+2rN/isHiQPegsrdSto/utIfnQRbDhEnq1OjvTOfIfNRVvrWICHUqh/hY8/6d1YxdpMZkeTvmum6zx9jkqGZB0iYzFNlZXIPea6nUy4FpI96ulnvfCGuIDSWARHaa2BE8DGUclY6lzVDoT/mVcvjoZWrOxGo8EcG5+uqjLjWRJdGE8V7RWb7trS4luQ9pPEqt1baSQG5mZ5efJWu1dAKu9apH8J+SjLR0KewETUIPIiY0zha4sUIrbI8bNR+iwYrOC8EEkug6kFxLSOUQr1XtTWAkAuI+6IBOfMgLLeh96Cg2mHtgsptZ/LkJHkNv62a8elLRAiHZ6bAarieZQbX7MX2GvS8rSQ7q6OEEkHtNNQCYyB7P+ZZjfNkdQfmT2i4we8CD2gRpPhkrded+ANd2pnUqqVrWy02pjnsLxTY46wwuLmxiPw+SnHJz76Ffwds14gACQPNC876bgwUwOLiMt59U4td29YS44QT+FoAHIAJlXs4aCA0SEJR+gYxoXkdwfKJ9VZ+jXRplvcHgVKdMd8TJcRoWnOJz+CpbWHHGx+C0/oh0jY2m2i6r1Lu12QwaT2YjIZHU8FtJJPQhK++gdloNlmTjHad2ifIn4Kj2qnUpP6sw6T2cIw5nQYRlrmtMtluDwWGHHPtEajjyVRum6X1q76oJLKLhGU4i6cgeWvosuTb30SxS7hanxTOHzbJ+Uq12a4pbFUgt1LYEE8xv5prYLW3FAyI9VPVarDTIgukaDVZRjG7ALZ7osbwHGgyBMYRgmeIbGLzXLb0bs1UfZtNNw3YZHmHGD7EhY3VcRbhwtABBLhvoI1T6lVDA7EecgrRPl8AY70lttSz2h9Hdjo07wIkEDmCn1wXkajx1pmNBsP6pD6SLY2rbGYR3WYS/YmcxO8T7VB2ZhpunFM+9bzwx4aWyq0bhdV6spiKbG4nQMh2j8VMuqB2dSGO2h5BjnsR5LH7pvGIM5jRWex3y95DceRyM6AcVyqUorYyRvWoXBtVrpLQDDSMTQ4iZ4gRGSqtyXZaTWqVJkuL6jmwWvMye9OXe/W13sFjaWkAOe0kkyQMyeSkLHcwbiikYfOJwqHEZ5mFUZvfH5NF7Su3d0UsjO8zETmW4n4ZP7pdATy+OjJfTBoU2sdIiMQy4EiZEcuCkLXZzS/ZNDY1Du9A1IO6cWG1F4BxkkfdkCfVSt2mTyd2U6m6rZQG1WkAzmIc0neCMvJds96sDgS4Ejh8lZr7Z14NKowAP0dPaa4ZAj94Tv4brOH9DbxD3OYxjmknNromMpghSvT8+io+4urb/a/InCOAyny+SVfajUe0tBgR2s8gOe8/FUel0dvNpBNAOjYmR5xCsV307eAA6z4OTYA/3VQ9I7uTNY4/ssRtJEZGP+pU+JSLrcJwk5/9R8/6pSDbJWPe6weCMLuqD79TzgrvOkeNtMDR3q4n1lG+uj8DvV4TL6q7cu/XgV03eTqZ5HET/qQA9Npk5MfP8VSPRJms6O48/mqfJMX3c4aETtk75orLvdMl58nOTAfm1gZdSfPrD7cKCaigfxO/z/NBFBZUaly3mB+1cfB0D2hE/wCHrzIyL3chVj4K/tqudsR5/wD6RnVY/wCZHmPiVpoz5Mzz/h+8RqareH2jj+vFKNuG88sNU/mqvPswlX9laZh0/mb811+IjLLyZ5paDkzPqnRy9P8AEaf+673FiZ2jo3eQGbjHAVCfcxaZ9bA1LfEhuS420CY7PngA9ydhbMUtP1izOisDmdZc6PHLRSNgvCztxVg8vBYWOBiAXRnA00Wt1bHSd3mU3czg+Kj7X0Xsr9WNG5jCBynCc1lPHGTtGThbMavS9BUAbQpuJ4ZlIWS7La1uLA7jGMa7dlbgzo7Z2iKbWNPIMn2pjbej1WewGnxDPfiWkFGCpISx0ZSL5qsEVGOaRxGR803ffWLX3ytDtvQQ1TNSmAeT2g/64Tah9HjBOUce2x2Xrkp8WMl42ZlaLxh4dizBB9FeLuq2Y0xUYA7i45uDuYKkbX9HFN2eEzxmmok/RxaQZpEgH+HTnBRkxwktOifGxS1dJg1hBIzVk6GXzTFlY5xDGlz4x9kvM95gPeERmOCgbH9HlWmDUqU+tqA9hr46kfvPAzqfw5DjOiY3/cdtrtY2qMdSmSWva3C4A6t7OWHuwNsKx/jxqr/snxMuT7NZu11Jl7jOJziBMzomzrY6m79oJ3g/NVC7LovKkIFBz2+QPkU8rXBelV4cKBaIghxHqSCsX6SV7YvGy1G/GhsuMmZmc1W756c9ktpgk/EcSU7HRG3vABa1v5pPkEpYvo2IOKoTPi3/AOy1xYEvyKjifyZlbLXaKhkscTJdIE5nXREZa3iMTHgjctK3iwdGadLKGGJ1LfL7ykBc7AM6bPGGZ+1djnGqo0eMwuyXy0ZmP1yVkuO+qb6jYgkwANsyBmN1pFe5KUZNZz7TPFQ97WSmxpLaQJEEFpZq3MGQFz5McZLQLEPrjtVQt7AaQSQ7OIdMGPNWcXh1RZTNTNwyxESAOax6n0lLH4ZwiSc9pMls+KVt9+ms0drFG+4B1nkuFRlD4Zm0anbLQx0sbVlzc4OZz3aeGZWZW+96tntNRheRhe4DwnLPwhdua8ADxOgAJJPhCna3QV1d5rGo8Od2jlmCdhA2VYsfkb5KgjGxk3pBaajQ6nSfUAzBax5GKCIkA8ZhJsvu8AB9lUbtHU1PdPwVgsnQeuz+81SOEn4gqeslz4Bo0neWtBJ0k9ldsMcYI3xriUgXvePCoOH2NQT6lKf2vb9+tnh1FTT2HzlXp9Jmr6bPEtaeesJpXt9AODQ6ljOgxMB8paq4mvMqP9rW/QCof+xVn1EpVt62/cOngadT3ESrc23MA7bmeZYR7k4o2pjs2hh82/BqOIc/0UG03la3dl7LQ0bljKrT7QRCZ1H147L7a0nc06jhPy0WoGq4jJg9Wx7kjUJIgkjmHMHsITSDkZqz66O0K1rI3HU1fZnl5o7P7ROlS1eBpVffMe1X7qD+8Rxx0vgutsp4+tRh97UByKGKN6bVa/8A7VVBX/6vxLf56Y/8UEw5CJu2kTBZPmfmisu+m3utI8HOG3IoIJkCVophskTl+84+85pramD8I0GwQQSZSGeAE90eg4JSnULBDYaOQA9yCCkpilK0unUeYB94TujVJ2b/ACt+S6gpsBWmeTf5W/JOXPPL0CCCBBhUM7egRHv8PQIIJoQdrstG/wArePgg1oxd1v8AK35IIJiDOpNJksafyj5Ij6DD9xuR2AHuQQQIGADQD0Cb1KhDtvQcfBBBSMDjyHoEKTAdQPQIIJjF6VmZBOBvm0H3pLqmz3Gfyt+SCCZIK1NrQYYwR+435JlagDAhsHUQB8EEExlbv67aBxfY08h+Bs+sSqvZbtok50268EEEmJlhoXRQaQRTAyGkhWeyQAAA3+UfJdQSiA4q1SKbnANkaHA3j4LjaxLoIbGFp7rdSfBdQV/AfJJ0bMwgSxun4QkTZaZEFjD+UfJBBAAfdtEaUmb7BJ1bBTnuD2oIJjRypd1H/DbvtPtSRsdP8DdtgggpGNH02g5Nbofuj5JZlpcIAMZcB8kEFSExR1uqCIcdOSCCCCT/2Q=='
    }

    levedura = {
        title: 'Levedura',
        text: 'A levedura é responsável por aromatizar a bebida, podendo apresentar aspectos florais, frutados ou minerais que caracterizam cada estilo de cerveja.',
        img: 'http://www.mundoboaforma.com.br/wp-content/uploads/2015/05/levedo-de-cerveja.jpg'
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row red align-items-center justify-content-center">
                    <TextCard {...this.textCard} />
                    <MaltCard {...this.malte} />
                    <HopCard {...this.lupulo} />
                    <YeastCard {...this.levedura} />
                    <AdditionalIngredientCard />
                </div>
            </div>
        );
    }
}

export default Beer; 