# 代码开发

parcel src/index.html

# 代码上传

rm -rf dist && parcel build src/index.html --no-minify --public-url ./
