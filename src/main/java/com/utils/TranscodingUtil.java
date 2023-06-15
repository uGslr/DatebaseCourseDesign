package com.utils;

import java.io.UnsupportedEncodingException;

public class TranscodingUtil {

    /**
     * 将get方法传来的数据转换成utf-8
     * @param decode
     */
    public static String iso_8859_1_utf_8(String decode) {
        String s = null;
        try {
            byte[] bytes = decode.getBytes("ISO-8859-1");
            s = new String(bytes,"utf-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

        return s;
    }
}
