<%@ page language="java" import="java.util.*" %>


Host name : <%=java.net.InetAddress.getLocalHost().getHostName() %>

Server Version: <%= application.getServerInfo() %>

Servlet Version: <%= application.getMajorVersion() %>.<%= application.getMinorVersion(
) %>
JSP Version: <%= JspFactory.getDefaultFactory().getEngineInfo().getSpecificationVersio
n() %> 
