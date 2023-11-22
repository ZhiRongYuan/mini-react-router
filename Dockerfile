# FROM registry.szcasic.com/nodejs/nodejs:11.15.0-alpine as build
FROM registry.szcasic.com/nodejs/nodejs:12.19.1-alpine3.11 as build
RUN mkdir -p /apps/working
WORKDIR /apps/working
ADD . /apps/working
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk add g++ make python
RUN npm config set registry http://10.88.102.99:7070/repository/casic-frontend/ && \
    npm install && npm run build



FROM registry.szcasic.com/nginx/nginx:custom-v0.5 
#FROM registry.szcasic.com/nginx/nginx:custom-v0.5-log
 
RUN mkdir -p /usr/local/nginx/html
COPY --from=build /apps/working/dist /usr/local/nginx/html/dist


# 标明该镜像是基于 nginx:latest 镜像而构建的
FROM nginx:latest

# 将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY build/ /usr/share/nginx/html/

# 将项目根目录下的default.conf文件复制到/etc/nginx/conf.d/default.conf，用本地的 default.conf 配置来替换 Nginx 镜像里的默认配置
COPY default.conf /etc/nginx/conf.d/default.conf
