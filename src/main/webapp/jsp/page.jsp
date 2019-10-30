<%@ page language="java" contentType="text/html; charset=utf-8"
%>
    <!doctype html>
    <html>

    <head>
        <title>${pageName}</title>
    </head>

    <body>
        <!--React의 최상위 요소가 되는 root div-->
        <div id="root"></div>
        <script src="/js/react/${pageName}.bundle.js"></script>
    </body>

    </html>