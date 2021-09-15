Para montar proyecto, se deben ejecutar los siguientes comandos en diferentes terminales, esperando que termine de ejecutar exitosamente cada uno esperando peticiones:

*For mount the proyect, you should execute the next commands in diferents terminals, waiting tha finish of execute successfully everyone. waiting for requests:*



1. #### monta la base de datos postgres 13:

   *mont data base postgres 13:*

`docker-compose --file ./docker-compose.mont-db.yaml up && docker-compose --file ./docker-compose.mont-db.yaml rm -fsv `

![Screenshot_step1-begin](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_step1-begin.png)

![Screenshot_step1-end](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_step1-end.png)

2. #### instala dependencias, crea estructura base de datos, hace consultas, construye versión distribución del back y ejecuta la versión de distribución del back:

   #### *install dependencies, build querys for structure of data base, do querys for make structure of data base, make dist version of back and execute dist version of back:*


`docker-compose --file ./docker-compose.install-migrate-back.yaml up && docker-compose --file ./docker-compose.install-migrate-back.yaml rm -fsv`

![Screenshot_step2-begin](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_step2-begin.png)

![Screenshot_step2-end](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_step2-end.png)

3. #### monta el front version distribución en nginx:

   #### *mont dist version of the front:*   


`docker-compose --file ./docker-compose.nginx-front.yaml up && docker-compose --file ./docker-compose.nginx-front.yaml rm -fsv `

![Screenshot_step3-begin](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_step3-begin.png)

![Screenshot_step3-end](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_step3-end.png)



**opcional** (crea una version para distribuir del front):

***optional** (create a dist version of the front):*

`docker-compose --file ./docker-compose.install-built-front.yaml up && docker-compose --file ./docker-compose.install-built-front.yaml rm -fsv `

![Screenshot_begin-optional](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_begin-optional.png)

![Screenshot_end-optional](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_end-optional.png)



Para finalizar los docker, presione control + c en cada terminal, y espere, cuando terminen todos los dockers habran sido eliminados. 

*For stop the dockers, press control + c in every terminal, and wait, when finish all the dockers will have been eliminated.*

![Screenshot_closing-dockers](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_closing-dockers.png)

![Screenshot_dockers-closes](https://github.com/Eduardo-L-R/proyect-dockers-compose/blob/master/Screenshot_dockers-closes.png)
