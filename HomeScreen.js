import React from 'react';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { listDoctors } from '../actions/doctorActions';




export default function HomeScreen() {
  
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(listDoctors());
  }, [dispatch]);
  
  
  return (
    <div>
   <div className="row top">
        <div className="col-2">
          <h1 className="head">Best Doctors at the best hospital.Search and Book now.  👩‍⚕️👨‍⚕️</h1>

        </div>
        <div className="col-1">
<img src="https://econsult.cloudmd.com.ph/assets/newpx/cpx/img/banner_image.png" alt=""></img>
                 </div>
                 </div>
<hr/>
<div><h1 className="service">Our Services</h1>
<div className="row top">
        <div className="col-2">
        <h1 className="serviceslist">Book Appointment</h1>
          <div >
          
           <img className="img-service" src="https://cdni.iconscout.com/illustration/premium/thumb/book-appointment-of-doctor-online-using-smartphone-1946840-1648367.png" alt=""></img>
           </div>
          </div>
        <div className="col-1">
        <h1 className="serviceslist">Rate And Review Doctors</h1>
        <div>
           <img  className="img-service" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeGtZoMLNQrAoXYYXS3u0WcIUw9VgGlTUAUZ5TDEMmgy37VOm0IPv5k_Hr02SmsmTxho&usqp=CAU" alt=""></img>
           </div>
        </div>
        <div className="col-1">
        <h1 className="serviceslist">Covid Updates</h1>
          <div>
           <img className="img-service" src="https://image.freepik.com/free-vector/illustrated-man-fighting-virus_23-2148490981.jpg" alt=""></img>
           </div>
          
        </div>
        </div>
        <div className="row top">
        <div className="col-2">
        <h1 className="serviceslist">Live Chat With Doctors</h1>
          <div >
          
           <img className="img-service" src="https://image.freepik.com/free-vector/human-online-chatting-smartphone-from-doctor-girl-with-medical-elements-blue-white-background_1302-22987.jpg" alt=""></img>
           </div>
          </div>
        <div className="col-1">
        <h1 className="serviceslist">Pay Fees Of Consulation Online</h1>
        <div>
           <img  className="img-service" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEBUSEhATEhUQFRkXEBcXFRAXFhUZFxUYGhcVFRcYHygiGBslGxcXJjEhJSkrLi4vGCEzODMsNygtLisBCgoKDg0OGxAQGy8mHyU3LS0vMjU1LS8vLi0tLy0vLS8yLS0yLTItLzUvLS0tLS0tLTUvLSsvLS0tLS0tLy0tLf/AABEIAL0A3gMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgQFAQMHAgj/xABKEAABAwIDAwYLBQYDBwUAAAABAAIDBBEFEiEGMVETIkFhktEHFBUWMlJUcYGh0iMzkbHBQlVicpPwJYKzNGNzlKOywghTouHx/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAgMFBv/EADYRAAEDAQMJBwQCAgMAAAAAAAEAAhEDBBIhExQxQVFhkaHRBVJxgbHB8CJTkvEy4RXSM2KC/9oADAMBAAIRAxEAPwDuKEIREIQhEQhCERCEIREIQhEQhCERCEIREIQhEQhCERCEIREIQhEQhCERCEIREIQhEQhCERaaqoZGwve4Na0XJKRK/aiomcRB9lGP2tL24l3R7gt/hBrSXx0zTYHnP+Js2/u1SdU1N+a3Rjdw4/xHrV+zUG3bzgubarQ69caYA5lXJxV431s5P8L32+ZWPLDvbKntu71QZlnMrd1uxUsq7b69VfeWHe2VPbd3o8sO9sqe27vVDmRmS63YmVdt9eqvvLDvbKntu70eWHe2VPbd3qhzIzJdbsTKu2+vVX3lh3tlT23d6PLDvbKntu71Q5kZkut2JlXbfXqr7yw72yp7bu9Hlh3tlT23d6ocyMyXW7Eyrtvr1V95Yd7ZU9t3ejyw72yp7bu9UOZGZLrdiZV2316q+8sO9sqe27vR5Yd7ZU9t3eqHMjMl1uxMq7b69VfeWHe2VPbd3o8sO9sqe27vVDmRmS63YmVdt9eqvvLDvbKntu70eWHe2VPbd3qhzIzJdbsTKu2+vVX3lh3tlT23d6yMVkPo1swP8Tn2/NUGZYzJdbsTKu28z1Trhu1c0Tg2o+0Yf2xa9uII9IfNPEMrXtDmkOa4XaRuIK41TVGnJu9F27+E9BCdvB3XOLZIHH7s5mdQJ5w917fiqdpogNvNCvWW0EuuO16E6IQhUV0UIQhEXMvCC+1Zf/dj55glPMum7R7PQzzco8vBygc0gDS/EKr8zqb1pe036Vfp2ljWAFcytZKjnlwjFI10XTz5nU3rS9pv0o8zqb1pe036VnnVPetWY1d3FI10XTz5nU3rS9pv0o8zqb1pe036UzqnvTMau7ika6Lp58zqb1pe036UeZ1N60vab9KZ1T3pmNXdxSNdF08+Z1N60vab9KPM6m9aXtN+lM6p70zGru4pGui6efM6m9aXtN+lHmdTetL2m/SmdU96ZjV3cUjXRdPPmdTetL2m/SjzOpvWl7TfpTOqe9Mxq7uKRrounnzOpvWl7TfpR5nU3rS9pv0pnVPemY1d3FI10XTz5nU3rS9pv0o8zqb1pe036UzqnvTMau7ika6Lp58zqb1pe036UeZ1N60vab9KZ1T3pmNXdxSNdF08+Z1N60vab9KPM6m9aXtN+lM6p70zGru4pGzJy8HEmarlPGM/97Fv8zqb1pe036Vc7MYBFTyuewvJczKcxBFswPQBwWuraGOYQFto2SoyoHGICZ0IQqK6aEIQiKqxL0/gFFUrEvT+AUVEWitqRFE+R26Jjnu9zQSfyXP4vCi5xsygc48BMSfwEab9sX2oKk/7pw/EW/VJvgodDFBUTyOayzmtc5xtZoBNteJPxsrNJrMmXOE6AFoqOdfDWmFY4L4SI5Zmwy07oM5ytdnzgOOgDuaLap5XH6z/ABPFg6nYRG0szvtbmsOsjuBO4A67k1bQsxSetdBTyeLwxsa4SatDrgX5wBJOa4sOCyq0WyIwwkzq91jTqugzjjAjX7J2QkDZPHauKvdh9Y8Su1yP3kEMzjnWGYFvHVYxLHalmNtpzMWwPdHZlmWIcwaXtfV9+lasg6SJGifJbMsInfHmugISN4RMaqYJqZsEpYJb5gA05uc0DeDxTysHMLWh21Zh4LiNiw5wAudAN6qpcZ15rLjiTa62Y7NZgaP2zr7h/YW2iomiMBzQSRd1+voXHtFW0VrQaFncG3RLjE4nQOHzUb1NlNlPKVBM4Aep+e6kUtS2RuZvxHSFtVHQkxTlnQTb9Wn++K9V1Q/xjK0nQtsLmx0B1WFPtS7Zw+q36g64QO9j7DQNeAUusk1LrThF4eH7V0oeJVpjDbAHNf5f/qieNTMlAkNw62gtaxNtF5x/ewe/9EtnaDs0qvpAte0gYjESR46QlGzDKsD4IMnDRhKnVNU9rGkMzF2+19NFKYbgG1rjdwVdjNS5mQMNr3vu6LWWcZlc1jQCRc6203Bbn2sUn1pJOTDZGAGI1HTjhM+SwbRvtpwAL07dR4eEKxQqN01Q2Nr72aPcSb7ibqybWjkeUPDd17rfitlHtCnUJBBbADscPp27YG8BYvszmwQQcYw2qUhU4fUPaZA4NG8Ddp1f/am4bUmRlzvBsevrU0Lc2q8MuuEiRIiQPPkcdCVLOWNLpBjAxqKlqZhnpH3fqFDUzC/SPu/UK6q6s0IQiIQhCIqrEvT+AUVSsS9P4BRERU22o/w+o/4RXLNhdlxWyPzyFkcOUvA9J2bNYC+g9E6rr+NURmppYQbGWNzWk7gSCAT1XSxsHspU0UsjpXwuZIwDmOkJzB2mjmjSxcrVGrcpOAMFVqtK9UaSME0YVhUNNHycMYY3ptvJ4uJ1J96StoMUqavEPJ8Exgjb968aOdZuZ2u+3RYWv0roKSto9iJJanxulqORlNib5gMwFszXN1FxvFtdVhRc28S446iccVsqg3QG/AlukwkUmOQxco6XUHM70jmY4apj8JezxljFXEcslM3na2uwG9wfWabke89ShYXsVXitjqqiohkLHAvOaRziALWF2Abl62n2Mq6ute/lWsgdky3c42tG0HKwaXuDwW8vBqNdfGAxPnoWgMNxwu6SqbAZ58Ur4HzAZaRrTIQLA5TcE9bnW04A8F1tVez+Bw0kIiiHW9x9J54nu6FZqvWqB5+kQBoW+kwtH1aTpVLj/pN/vpVxFIHNBB0K0V9IJG2vYj0T+iqvJMv9ledebTZbVUqU6Re18aMIIEb9+rHauo3JVqLWuddLZ5rNQ4OqRl15zflZbmf7YfjbsLbh+G5HZnG5G4DcOte3UJ5flARa/XwsehaWWS0Q2q5uJqh5GGAxk/DOhbHVqUlgOAYRO0rRi5+1j/vpXnHjzmfH8wpNTROfKH3blFuO4G56Pes4nROky5SBlve9+m3cs7XZK1SnaQ1uLi27oxiMdKilVptdSk6AZ3SouPHVh9/6L3j50Z8f0W2uoXSNYAW3aNb9YG7TqXqtoi9jACLt33vbdrZLXZa1Q2q63B9wt0YkRI8eiijVptyMn+N6fZZxMjxc+5tvxCgy/wCyM/m1/FynVdM50TWAtuLXuTbQdGnFbI6MciI3cNbcb3uPit9ostWtXeQIBp3AdUkzCwp1WMptkyQ6fKIVfTUksjBeTKy2g6vcP1VnRxMYCxv7J53vI6fkq5lDO3Rr7D3/AKdCsKOmyNte5Ju48SnZ9JzXAupuDgILnGT4Nx0TsgRtwS1PBBAeCNQAjzP964UhTML9I+79QoSm4X6R936hdhUVZoQhEQhCERVOJ+n8Aoil4n6fwChoiyhYULHIXPpZ2MaXOfDI1gG8lzCAB7yVI0opyF88N2CxSw/w6fsjvWfMLFP3dP2W96v5kz7g5dVrvnYvoZC+ePMHFP3fP2W96z5hYp+7p+y3vTMmfcHL/ZL52L6GQvnnzCxT93T9lverTZfY3EYayGWSjmjZG4l7i0WaAx2p1WLrGwAnKDl/spvnYu5IXy/guHvnPpuaxvpOufwHWmiHBoALZXO63OfdcuvaKVE3SSTuH9rr2Psi0Wpl9sBu06/DBd4QuBHZZsjxycrogTz75nADiOm/yTlRbD0TGgOY+U9Lnvfr8AQAqtXtSzUwJJJOoD1khY1OyrTTfccB4zgfngulrK5Bj3g+jc0upHujeNQxzyWO6gTq0rT4HGuElW14ILXQBwde4IfJcEHpurNltVG1MLqTtGkEQRzPFUq1B9Ew8LsiFK2klfFSyyQtbyjG3ZdoIvcb7rnfnTinCDsR9G/pV6lZ3VBII8yqdW0NpmCCnpCRnbTYqOin7MXeuj4HIZKaKSRrc72AvsABmtrb4pVs7qYkkeSmlXbUMCVBQq/DvvJB/L+b1PWhbllTcK9I+79QoSm4X6Z936hEVohCERCEIRFUYn958Aoal4p958AoiIhbKb02/wAw/Na0NlDTmO5up9w1QmEUnayiE1FOzW/JPLCCQ5rg0lrmkag3XHsExeor6SgwqCaQPe50ldKHOzMjbI4hpdv3f+IXVpNqqdzSC2TnCx5o6UqbHYfh+HibkXzufOLco5rMzGjc1lui+vwC10u07I1hmoJwI+c1vNjrz/AqqoGVVVVYnLRyPtSQ+K0IzutmbZpLbm2ezDZx6Xo8GLqRsj5JZaynqqKN7qyKaV+STTWUg8PVPEb1Kp8Eo46MU0VXWxObOZ+WbyYe55FhntoQB0LQNm6IxziSrrJJqvKJ5y2PO5jTfkxe4AJDb/ygblsPadhILcqAMBw+E+KxzO0dwqjjxeeavpMQdM9jKuvyQw5zlbCzK1uZo4kneOhdyxP7iX/hv/7SuX1ezGDkwuiZNTvp3teXMaCZMtiA/NfpF9E7VG0sMjHxtD7vY8C7dPQJWNbtGyVC0MeNnPBTmldoJLCuYeD3ZuKWhjLnOaS8Xta2U2zu16ec0D3qwfsvr97lu57Wtc37R2UFzWsAPOcW620SPsZjsohbC2RzHRXLQCRcEg6fED8AmMY1U2A5eTQWF3A20tobXBt071zrRkW1C2o0zJnfOvSvU2RluqUm1LPUbcIwGm7AiP4nEfMEwwYFybebKbmw1c5hL8rS5lr9GYa21KtaeABjW3Mhu4ZgeaGscWl3OsXag8NyVMPxGV5s6Uuc4tylz3XJAs21gecLDXemOnjLG5Wve3XMQHEjMfSIvx1vxXLtFSxgwWGePD6uepabRStjTFR4J08tMx+9anSUlgSX2tr6LjcXaAdOJcPmqbDKFsWKVmX9ttM53W4PkaT8cqmvmyAyOlczIHXeXkZWm2a54aA/BLmw+Liqra2VrrtPizYz0gB0gBN+m+vxVvsoUHVC6g0gAYzjpiBpPjujWuTbcoGRVIJ1ddC6htqXDD6jLfNyelt+8blyWjxAtja18crnDUnK4391/wA11PGa6anLLySPDgScsTSdLc1jQOc4k7tNAVUna55LQxtWQXNa69MGluZ2W9jvA3n3L01C0im26WzjOmFw61nNR14OjVolJTsTZreCbXdzTpr8+C67s64GkhIBaDG2wO8adKXjtK5pyuNTmu+zW04cbMflu42s09NuFlPwCvlqouUEksRFszXwtBFwHC19+hCivXFQAAR5ypo0DTJMz5QoVB95J/l/N6nKvoPvJOnRtzx1dqrBVlYQFOwr0z7v1CgqbhPpn+X9QiK2QhCIhCEIiocYqY2yWc4g5R0E8VB8fh9c9krRta77f/IP1VLnXk7b2taqVofTYRAMaAuvRsVJ9NrjMlMPj8PrnsleZayEtIzkXBHonpCoM6M6q/5q2d4cAtuYUd/Fbhh0PtDv6Z70eTofaHf0z3rTnRnVDLu2Dn1Vz6u8eXRbvJ0PtDv6Z70eTof/AH3f0z3rTnRnU5w7YOfVRDu8eXRb/J0PtDv6Z716iooWm/Lu3EfdnpBHHrUbOjOpbaXNIIAw+bVBaSCC48uiSGeCqNpBGJkEbiKV1/8AVVtHsZIBbyqHdZo9f9VMOdGdXKnbNrqfzIP/AJb0WqhQyH/E5zfAn9JTqvB4ZCC7F3c3VtqUtsR0i0u/rV7SYPVMblOLNkt0voiT+IlF1PzozrCp2paKjQx4aQP+reiZuC4vvOk65KX8a2Plqhllxg5PUbSFrPiBLr8VYbD7LQ4e6QmqE4myZmmncwWZn09M3vm+FlYZ0Z1sZ21a2MuMIA2BrR7LW6w03GXST4pi8dpfUH/V70ePUvq/6vel3OjOn+btveHAKMwo7+KY/HqX1f8AV71g1tL6g/6vel3OjOp/zdt7w4BMwo7+KvW1MAe5wdYODQGhhs3KCNPxWzx+H1z2Sl7OjOo/zdt7w4BMwo7+KYfH4fXPZKsMFqWOeQ1xJy8COkJOzq/2PP2r/wCT/wAgrdg7VtVa0MpvIg7hsK017HSZTLhMhNyEIXq1yUIXh8gC0uq2jpRFQ7Y0RLWygXyaP93Qfx/NKWZdDkr2EEGxB3g7ilTFMIZcuheAD+yej3Fec7U7LqVKhrURM6RrnaNu8eurq2O2Na3Jvw2FU+ZGZbDQy+qO03vXk0cnq/NveuJmNo+278XdF0MvS77eIXnMjMvXisnD5t70eKycPm3vTMrR9t34u6Jl6XfbxC85kZlk07+HzaseLv4fMJmVo+278XdEy9LvjiEZkZljkH8Pm1HIP4fNqZlaPtu/F3RMvS77eIWcyMyxyD+HzajkH8Pm1MytH23fi7omXpd9vELOZGZY5B/D5tRyD+HzamZWj7bvxd0TL0u+3iFnMjMscg/h82o5B/D5tTMrR9t34u6Jl6XfbxCzmRmR4u/h8wsimfw+be9MytH23fi7omXpd8cQsZkZl68Vk4fNvejxST1fm3vTMrR9t34u6Jl6XfbxC85kZl7FFL6v/wAm969NoJfVHab3pmNo+278XdEy9Lvt4hasyctkqItjMjhYyWy/yjp+J/JVWFYTGCHTODrbmjd8T0+5Nba5nQQu92V2W+k/LVRBGge59lzbba2vbk2Y7SpiFpZUNPStoK9AuYq/EI3HcqOeml602ELyYxwREkyUsnWtDqaTrT0advBeDRt4IiQzA/rXkwP609mgbwWPJzOCIkMwu6155NyenYWzgsDCWcERI3JORyTuCevJLP7Cx5JZ1IiRDG5YyFPLsGaeC8eQ29SIknKUZSnbyG3qR5Db1IiScpRlKdvIbepHkNvUiJKyFZ5JydRgjepbG4QzqREj8k7gjknJ58ks6keSWdSIkfk3L0IH9adhhTOC2Nw1nBESOIX9a2Np5OtOvk9nBe20TeCIkxlNJ1qTFSy9abRSt4L0IG8ERUVFTyA63V9CNF6DAvSIhCEIiEIQiIQuOeGOaanrKEwVVVEKuQidrKmqaxwD4hzWh9maOPo2XvbLEp8MxaiZTVM8sVaWtmp5pppxblAy7DM5zmE5jYg728NFLQXXd5I8x7b1D3Xb06he8vgK7AhU21WIvgpJZI2F8uXLAwb3yO0YB8Tf3ApZ8Dm0rq3DgJHl81M4xzFxJc4b2OcTvJBtf+EqG4zGrrHzxCk4ROuRw+cjsT+hcc8M1NW0ro6+mq6sQl4bVQtqKlrAb3a4ZX8xrtWm1gDa29NlbVR11BTNpZZ2GrDTC5lROySNrQOVkke12Z5YLizrgvLb77qAZbO+Pnj+4Q4OAOsT134a+Up3Qo1FSiKNsbXPcGCwL3vkeetz3klx95XMsZ2kqK7GhhNPO+mhhuauWM5Zn5AHOax+9gzWbcW3neNDOk3R8AxJ+eGlNAk/J1LqyFzHwjsqMMp219FUT/ZPayeKaeoqIpGPO8iZ7i12YNF2kGzjqpO0Ln4lhcNXRzz0s0/JiEsqJ42tLn2cx7Y3BrudcZiL/koEkSNoHmdHz+pa43E+Q0roqFybwZbWyTiTCcRdKyqhBa1xkkjlkDd7TIxwdyjbekDdzdegk2eJ4dyeBzytqawyxxSytkNXWZw5ubLqH2ygAc21tL2vqlQ3Gl+kAThrHwHzwUsF513XMLoyFzjwJukmw4VM1RUTyvkewmWeokAa0iwDHuLQesC+u9XfhLaRhlRKyWaKSCJz4nRSzREOA6eTcMw6nXCVTkwSdQnlPooYL5AGvD2TYhcu8GNK6qwYzz1VY+WQyXf45WBzchIbktIA21vj03GiXtktra3DK5tLik0k0FYGvgnke9+XMBleHvNwzoc0nmkX43zum9d8OYmPHAqJ+m98wMTzC7khKeHYEzxqpvPVubZgY01laWsD2XcWfaXBJ6b6dFlzjYKsMlbibaytrHQUOcx5q2uYGNZK4aubICdABrday8AwdhPDT6/pZhpIneBx0LuaEtbL4VJC+Z3LzyxVAikhbNNJMYiQ7PG1zyTl9HU8emyZVmRBgrAGRKEIQoUoQhCIhCEIiEIQiLi/h8LfGsMBdb7R+bnWIBfDrcG7enXqXSMP2Roop/GWwl85AAlllnnkAAIGR8znFuhI0tot9Tsth8rjJLQUkj36vc+ngc5x4lxbcqwoqKOJgjijZExvotY0NaLm5s0aDUlSMG3dck8UIJdOqAOE9UvYlUzTVjRTRwTihuZeUnfEGzSNLWgFkcl3NjL7ggfet+HN9l5X4TtDJT1AZDFiQzNDXudE1znOdFZ7mMvZ2dnoj0l16h2fo4nmWGkp4ZDcF8cMTHkHfdzQDqtE+y+HyOMklBSSPebvc6ngc5xO8ucW3JUAQ4Hxnz+CNkDShxBHhy+HiVv2ioYp6WeKYDk3xOD7m1hYm9+gi179FlzH/wBOzg6knJJLo5QxtyTkYRms0fsguc4m2+3ULdTqsLp5YxBLTxSRNtljfHG5gto2zHCwsNyjUGzlDE4SQ0NNC9t8ro4IWOF9DZzWghGwCTtAHOf6UOkgDYZ5fCrhcVjoPJu1Bnm5lPX8pyUrjZgdKMxa5x0Bzgix6HArtSj1dLHKx0cjGSMeLPa9oc1w4OadCgkODhvHkcD4bjqO0SDJgtIPwjR+tfMc98OFaDh4o2DlJ62WNsMTdXuDXZi4NGtrgD/MrHAcK8RwuhppXNa9s0Ifdw+8fLncxp6bEkacEzYdgFJTuLqekp4HOFi6KGKNxF72JaBcXA06l6xPA6SoINRSwTlos0yxRyFoO8AuBsjSRxB4fDx3IceBHHWkLws7DvnDcQoiWVdKA45NHStZqC22+RvRxGnBSpqhz9lXyPPOkoHud0c5zSTp7yn+GJrQGtaGtaAGgAAADQADoAChVuDUszBHNSwSsjN2NfFG9rSd5a1wIB1K1vbNNzBr5aQeMiRu3rJroe151c8QRwxjDWkrwCH/AAZnVNLf8QpG12NR1WD4k+N7HRxtfFG9puHlrGFxB3HnOIFuCY/M3C/3ZRf8rTfSvbtmaExiE0VMYmuLmx8hDkDjoXBuWwcR0rOsMo1w2iPaVFM3CDsM+8JN8C8rRgAJcAGGfOSRZvOJ14aaq02h2UixPCooiQHtiY+nl0OR3Jjp6WHcR8d4CvWbKYcGuaMPpA19s4FPAA62ozDLrY8VOw/DoYG8nBDHCy98sbGMbc7zlaAL6LJ8OBndynqobIgDVPOEh+BgVTYqmCrLuUpJmwgO3hrY25Rf9ptjoeFkk+DzA6atxPF4aiKOQOdLyZcGlzCZ3jPGd7SLjULuU9HE8OY+Jj2yi0gc1rg8WtZ4I5wtxVf5m4X+7KL/AJWm+lYu+p947CPMgAnlPjzN+lpaNs8CYHAx5L1QYpFywo2va+SCIOnyuB5O2VrWuHQXc42Oth1hXSrsNwOlpyTT0sEBeAHmKKOMuA3A5ALqxWRMmTp1qAIwQhCFClCEIRF//9k=" alt=""></img>
           </div>
        </div>
        <div className="col-1">
        
          <div>
           </div>
          
        </div>
        </div>
</div>
<hr></hr>
<h1 className="service">Testimonial</h1>
<div class="testimonials-section">
    <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
    <input type="radio" name="slider" title="slide2" class="slider__nav"/>
    <input type="radio" name="slider" title="slide3" class="slider__nav"/>
    <input type="radio" name="slider" title="slide4" class="slider__nav"/>
    <input type="radio" name="slider" title="slide5" class="slider__nav"/>
  <div class="slider__inner">
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">The entire process from check in to the end was seamless. The staff at the health check department was courteous, helpful and very attentive. I would highly recommend this hospital to anyone looking for something similar services.</p>
      <h2 class="slider__caption">Bhakti Takane</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">Dr Vijay Kumar Chennamchetty: We met Dr Vijay Chennamchetty last month with severe cough and sputum for my father Dr Varaprasad. His way of handling patients is excellent and so soothing that the patient feels immensely confident about recovery. Thanks to Dr. Vijay, within 2 weeks, he is completely normal.</p>
      <h2 class="slider__caption">Vaishnavi Bhamare</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">It's very well mannered staff good coordination with patients. Mrs. Praveena garu assisted very well and taken good care towards patients. Overall experience is satisfactory.</p>
      <h2 class="slider__caption">Dhanashree Wadile</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">AppointMe is one of the best and most trusted hospital in Asia I have treated some of my relatives and they told me that this was one their best choice.</p>
      <h2 class="slider__caption">Achal Patil</h2>
    </div>
    <div class="slider__contents">
      <quote>&rdquo;</quote>
      <p class="slider__txt">The care and hospitality is very incredible besides healty treatment , tests & consultations for my father. I highly recommend everyone to visit the hospital. Thank you.</p>
      <h2 class="slider__caption">Madhuri Hirwale</h2>
    </div>
  </div>
</div>

</div>
  );
}
