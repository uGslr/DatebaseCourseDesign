package com.utils;

import java.text.ParseException;
import java.util.Date;
import java.text.SimpleDateFormat;

public class TimeUtil {

    public static Date getTime(String format) {
        SimpleDateFormat formatter= new SimpleDateFormat(format);
        Date date = new Date(System.currentTimeMillis());
        String d = formatter.format(date);
        try {
            date = formatter.parse(d);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return date;
    }

    public static Date toDate(String Date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        Date date = null;
        try {
            date = sdf.parse(Date);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return date;
    }
}
