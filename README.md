# password-progress-jquery-3.4
### สามารถนำไปใช้ร่วมกับ Bootstrap 4 + jquery ได้เลย
### มีการเขียนให้เข้าใจง่ายและแก้ไขได้ ไม่ได้เขียนให้ยากเพื่อให้ผู้เริ่มต้นเข้าใจ การเขียน jquery 

## ยกตัวอย่างพื้นฐานสำหรับมือใหม่
~~~
id = password = jQuer("#password").val(); or $("#password").val();
id = progressbar = jQuer("#progressbar").css("width", "0%"); or $("#progressbar").css("width", "0%");
id = submit = jQuer("#submit").prop('disabled', false); or $("#submit").prop('disabled', false);
~~~

### บางอย่างหลาย ๆ ท่านคงไปเอามาจาก Stackoverflow แล้วมีเนื้อโค้ดยาวและไม่จำเป็น เพราะคนเขียนแต่ละคนมีจุดประสงค์ในการเขียนที่แตกต่าง ผมจึงทำการเขียนขึ้นมาเอง โดยใช้การเรียกจาก id เพื่อให้เห็นภาพ โดยกระบวนการที่จะใช้ if else ก็ใช้ได้ แต่ผมคิดว่า switch จะตอบโจทย์กว่า แต่หากท่านจะประยุกต์ก็ถือว่าทำได้เช่นกัน โดยจะเน้นไปที่ jquery โดย jquery จะครอบคลุมในการแก้ไข css and add class remove class หากอยากจะเขียน css ให้มากกว่า 1 ท่านก็แค่ปรับโค้ดของผม
~~~
jQuer("#progressbar").css("width", "0%"); ot jQuer("#progressbar").css({"width": "0%","background-color":"#fff"});
~~~

