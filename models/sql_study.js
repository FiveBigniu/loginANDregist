//通过user表查询其关联表 找到好友id整条数据
SELECT * from ct_user t where t.userid in(
select r.frendid from ct_user c,ct_user_relation r where c.userid = r.userid and c.userid=2)